# 博客发布脚本 - 工作版本
# 完全避免编码问题，基于简单版本构建

param(
    [Parameter(Mandatory=$true)]
    [string]$Title,
    
    [string]$Category = "VibeCoding",
    
    [string]$Description,
    
    [string]$Tags,
    
    [switch]$Draft
)

$ErrorActionPreference = "Stop"

try {
    Write-Host "`n🎯 博客文章发布工具" -ForegroundColor Cyan
    Write-Host "===================="
    
    Write-Host "标题: $Title"
    Write-Host "分类: $Category"
    if ($Description) { Write-Host "描述: $Description" }
    if ($Tags) { Write-Host "标签: $Tags" }
    if ($Draft) { Write-Host "模式: 草稿" -ForegroundColor Yellow }
    
    # 生成文件名
    $date = Get-Date -Format "yyyy-MM-dd"
    $slug = $Title -replace '[^\w\s-]', '' -replace '\s+', '-'
    $fileName = "$date-$slug.md"
    $filePath = "$PSScriptRoot/../$Category/$fileName"
    
    Write-Host "创建文件: $filePath"
    
    # 检查文件是否存在
    if (Test-Path $filePath) {
        Write-Host "错误: 文件已存在" -ForegroundColor Red
        return
    }
    
    # 创建目录
    $categoryDir = "$PSScriptRoot/../$Category"
    if (-not (Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
    }
    
    # 创建Frontmatter - 使用简单字符串连接
    $desc = if ($Description) { $Description } else { $Title }
    
    $frontmatter = "---`n"
    $frontmatter += "title: $Title`n"
    $frontmatter += "date: $date`n"
    $frontmatter += "description: $desc`n"
    $frontmatter += "category: $Category`n"
    
    if ($Tags) {
        $cleanTags = $Tags -split ',' | ForEach-Object { $_.Trim() }
        $tagStr = "'$($cleanTags -join "', '")'"
        $frontmatter += "tags: [$tagStr]`n"
    }
    
    $frontmatter += "---`n`n"
    $frontmatter += "## 文章内容从这里开始`n`n"
    $frontmatter += "请在这里撰写你的博客文章内容。`n`n"
    $frontmatter += "### 写作提示`n`n"
    $frontmatter += "1. 介绍文章背景和目的`n"
    $frontmatter += "2. 分章节详细展开`n"
    $frontmatter += "3. 使用代码块展示代码`n"
    $frontmatter += "4. 总结要点和收获`n"
    $frontmatter += "5. 提供进一步学习建议`n`n"
    $frontmatter += "---`n"
    $frontmatter += "*文章创建于 $(Get-Date -Format 'yyyy-MM-dd HH:mm')*`n"
    
    # 写入文件
    [System.IO.File]::WriteAllText($filePath, $frontmatter, [System.Text.Encoding]::UTF8)
    Write-Host "文件创建成功" -ForegroundColor Green
    
    if ($Draft) {
        Write-Host "草稿模式: 文件已创建，未推送" -ForegroundColor Yellow
        return
    }
    
    # Git操作
    Write-Host "提交到Git..." -ForegroundColor Cyan
    
    git add "$Category/$fileName" 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git添加文件失败"
    }
    
    $commitMessage = "feat: add $Category article - $Title"
    git commit -m $commitMessage 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git提交失败"
    }
    
    git push origin main 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git推送失败"
    }
    
    Write-Host "发布成功!" -ForegroundColor Green
    
    $pagesUrl = "https://attraction11.github.io/$Category/$($fileName -replace '\.md$', '')"
    Write-Host "文章地址: $pagesUrl" -ForegroundColor Cyan
    Write-Host "部署需要1-3分钟。" -ForegroundColor Yellow
    
    Write-Host "`n监控命令:" -ForegroundColor Magenta
    Write-Host "  gh builds     # 查看构建状态"
    Write-Host "  gh blog       # 查看仓库信息"
    Write-Host "  gh issues     # 查看Issue列表"
    
} catch {
    Write-Host "错误: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
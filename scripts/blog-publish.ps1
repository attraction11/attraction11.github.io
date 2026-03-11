<#
.SYNOPSIS
自动发布博客文章到GitHub Pages

.DESCRIPTION
创建新的博客文章，自动生成Frontmatter，提交到GitHub，并监控部署状态。

.PARAMETER Title
文章标题（必需）

.PARAMETER Category
文章分类（可选，默认：VibeCoding）
可选值：VibeCoding, Framework, FullStack, JavaScript, notes, etc.

.PARAMETER Description
文章描述（可选，默认使用标题）

.PARAMETER Tags
文章标签，逗号分隔（可选）

.PARAMETER Draft
是否草稿模式（不立即推送）

.EXAMPLE
# 发布VibeCoding分类的文章
.\blog-publish.ps1 -Title "OpenClaw安全检查实战指南" -Category VibeCoding

# 使用简短语法
.\blog-publish.ps1 "新的博客文章" -Category notes

# 带标签和描述
.\blog-publish.ps1 -Title "AI助手技能配置" -Category VibeCoding -Description "详细配置OpenClaw技能" -Tags "OpenClaw,AI,Automation"
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true, Position=0)]
    [string]$Title,
    
    [Parameter(Position=1)]
    [string]$Category = "VibeCoding",
    
    [string]$Description,
    
    [string]$Tags,
    
    [switch]$Draft
)

# 错误处理设置
$ErrorActionPreference = "Stop"

# 颜色定义
$ColorGreen = "Green"
$ColorYellow = "Yellow"
$ColorRed = "Red"
$ColorCyan = "Cyan"

# 输出辅助函数
function Write-Step {
    param($Message)
    Write-Host "`n▶ " -NoNewline -ForegroundColor $ColorCyan
    Write-Host $Message -ForegroundColor $ColorCyan
}

function Write-Success {
    param($Message)
    Write-Host "✓ " -NoNewline -ForegroundColor $ColorGreen
    Write-Host $Message -ForegroundColor $ColorGreen
}

function Write-Info {
    param($Message)
    Write-Host "ℹ " -NoNewline -ForegroundColor $ColorCyan
    Write-Host $Message
}

function Write-Warning {
    param($Message)
    Write-Host "⚠ " -NoNewline -ForegroundColor $ColorYellow
    Write-Host $Message -ForegroundColor $ColorYellow
}

function Write-ErrorMsg {
    param($Message)
    Write-Host "✗ " -NoNewline -ForegroundColor $ColorRed
    Write-Host $Message -ForegroundColor $ColorRed
}

# 主程序开始
try {
    Write-Host "`n🎯 博客文章发布工具" -ForegroundColor Magenta
    Write-Host "=" * 50
    
    # 显示参数信息
    Write-Info "标题: $Title"
    Write-Info "分类: $Category"
    if ($Description) { Write-Info "描述: $Description" }
    if ($Tags) { Write-Info "标签: $Tags" }
    if ($Draft) { Write-Warning "草稿模式: 仅创建文件，不推送" }
    
    # 1. 生成文件名（slug）
    Write-Step "生成文件名..."
    $date = Get-Date -Format "yyyy-MM-dd"
    $slug = $Title -replace '[^\w\s-]', '' -replace '\s+', '-'
    $fileName = "$date-$slug.md"
    $filePath = "$PSScriptRoot/../$Category/$fileName"
    
    Write-Info "文件名: $fileName"
    Write-Info "完整路径: $filePath"
    
    # 检查文件是否已存在
    if (Test-Path $filePath) {
        Write-ErrorMsg "文件已存在: $filePath"
        Write-Warning "请修改标题或删除现有文件"
        return
    }
    
    # 2. 创建目录（如果不存在）
    $categoryDir = "$PSScriptRoot/../$Category"
    if (-not (Test-Path $categoryDir)) {
        Write-Step "创建分类目录: $Category"
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
        Write-Success "目录创建成功"
    }
    
    # 3. 生成Frontmatter
    Write-Step "创建文章Frontmatter..."
    $frontmatter = @"
---
title: $Title
date: $date
$('description: ' + $(if ($Description) { $Description } else { $Title }))
$('category: ' + $Category)
$('tags: [' + $(if ($Tags) { "'$($Tags -split ',' -replace '^ +| +$', '' -join "', '")'" } else { '' }) + ']')
---

## 文章内容从这里开始

请在这里撰写你的博客文章内容。

### 写作提示

1. **开头**：介绍文章背景和目的
2. **主体**：分章节详细展开
3. **代码示例**：使用代码块和高亮
4. **总结**：回顾要点和收获
5. **下一步**：提供进一步学习建议

### Markdown语法参考

- **标题**：## 二级标题，### 三级标题
- **列表**：- 项目1，- 项目2
- **代码块**：```bash ... ```
- **链接**：[文本](URL)
- **图片**：![描述](图片路径)

---
*文章创建于 $(Get-Date -Format "yyyy-MM-dd HH:mm")*
"@
    
    # 4. 写入文件
    Write-Step "写入文件..."
    $frontmatter | Out-File -FilePath $filePath -Encoding UTF8
    Write-Success "文章文件创建成功: $filePath"
    
    # 5. 打开文件编辑（可选）
    $openEditor = Read-Host "是否用默认编辑器打开文件？(y/N)"
    if ($openEditor -eq 'y' -or $openEditor -eq 'Y') {
        Write-Info "正在打开编辑器..."
        Start-Process $filePath
    }
    
    if ($Draft) {
        Write-Warning "草稿模式：文件已创建，但未提交到GitHub"
        Write-Info "稍后可以手动提交: git add $Category/$fileName"
        return
    }
    
    # 6. Git操作
    Write-Step "Git提交..."
    $gitStatus = git status --porcelain 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Git命令失败，请确保在Git仓库目录中"
    }
    
    # 添加文件
    git add "$Category/$fileName" 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git添加文件失败"
    }
    Write-Success "文件已添加到Git暂存区"
    
    # 提交
    $commitMessage = "feat: add $Category article - $Title"
    git commit -m $commitMessage 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git提交失败"
    }
    Write-Success "提交成功: $commitMessage"
    
    # 7. 推送到GitHub
    Write-Step "推送到GitHub..."
    git push origin main 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git推送失败，请检查网络连接或权限"
    }
    Write-Success "推送成功！"
    
    # 8. 显示文章信息
    Write-Host "`n📊 文章发布信息" -ForegroundColor Magenta
    Write-Host "-" * 40
    Write-Info "文章标题: $Title"
    Write-Info "文章分类: $Category"
    Write-Info "文件位置: $Category/$fileName"
    Write-Info "本地路径: $filePath"
    Write-Info "提交哈希: $(git rev-parse --short HEAD)"
    
    # 9. GitHub Pages部署状态
    Write-Step "检查GitHub Pages部署状态..."
    Start-Sleep -Seconds 3  # 给GitHub一点时间
    
    $pagesUrl = "https://attraction11.github.io/$Category/$($fileName -replace '\.md$', '')"
    Write-Info "文章将在以下地址发布:"
    Write-Host "  $pagesUrl" -ForegroundColor $ColorCyan
    Write-Info "部署通常需要1-3分钟完成"
    
    # 10. 监控选项
    $monitor = Read-Host "`n是否监控部署状态？(y/N)"
    if ($monitor -eq 'y' -or $monitor -eq 'Y') {
        Write-Info "使用命令监控部署: gh builds"
        Write-Info "或: gh run list --repo attraction11/attraction11.github.io --workflow 'Build and Deploy'"
    }
    
    Write-Host "`n🎉 博客文章发布流程完成！" -ForegroundColor Green
    Write-Host "=" * 50
    
} catch {
    Write-ErrorMsg "发布过程中出现错误: $($_.Exception.Message)"
    Write-Warning "请检查错误信息并重试"
    exit 1
}

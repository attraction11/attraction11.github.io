<#
.SYNOPSIS
Automatically publish blog articles to GitHub Pages

.DESCRIPTION
Create new blog articles, generate Frontmatter automatically, commit to GitHub, and monitor deployment status.

.PARAMETER Title
Article title (required)

.PARAMETER Category
Article category (optional, default: VibeCoding)
Possible values: VibeCoding, Framework, FullStack, JavaScript, notes, etc.

.PARAMETER Description
Article description (optional, default uses title)

.PARAMETER Tags
Article tags, comma separated (optional)

.PARAMETER Draft
Draft mode (create file only, don't push)

.EXAMPLE
# Publish VibeCoding article
.\blog-publish-fixed.ps1 -Title "OpenClaw Security Check Guide" -Category VibeCoding

# Short syntax
.\blog-publish-fixed.ps1 "New Blog Article" -Category notes

# With tags and description
.\blog-publish-fixed.ps1 -Title "AI Assistant Skill Configuration" -Category VibeCoding -Description "Detailed OpenClaw skill configuration" -Tags "OpenClaw,AI,Automation"
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

# Error handling
$ErrorActionPreference = "Stop"

# Color definitions
$ColorGreen = "Green"
$ColorYellow = "Yellow"
$ColorRed = "Red"
$ColorCyan = "Cyan"

# Output helper functions
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

# Main program
try {
    Write-Host "`n🎯 Blog Article Publishing Tool" -ForegroundColor Magenta
    Write-Host "=" * 50
    
    # Display parameter information
    Write-Info "Title: $Title"
    Write-Info "Category: $Category"
    if ($Description) { Write-Info "Description: $Description" }
    if ($Tags) { Write-Info "Tags: $Tags" }
    if ($Draft) { Write-Warning "Draft mode: File created only, not pushed" }
    
    # 1. Generate filename (slug)
    Write-Step "Generating filename..."
    $date = Get-Date -Format "yyyy-MM-dd"
    $slug = $Title -replace '[^\w\s-]', '' -replace '\s+', '-'
    $fileName = "$date-$slug.md"
    $filePath = "$PSScriptRoot/../$Category/$fileName"
    
    Write-Info "Filename: $fileName"
    Write-Info "Full path: $filePath"
    
    # Check if file already exists
    if (Test-Path $filePath) {
        Write-ErrorMsg "File already exists: $filePath"
        Write-Warning "Please modify title or delete existing file"
        return
    }
    
    # 2. Create directory if it doesn't exist
    $categoryDir = "$PSScriptRoot/../$Category"
    if (-not (Test-Path $categoryDir)) {
        Write-Step "Creating category directory: $Category"
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
        Write-Success "Directory created successfully"
    }
    
    # 3. Generate Frontmatter using string concatenation
    Write-Step "Creating article Frontmatter..."
    
    $frontmatterLines = @()
    $frontmatterLines += "---"
    $frontmatterLines += "title: $Title"
    $frontmatterLines += "date: $date"
    
    $desc = if ($Description) { $Description } else { $Title }
    $frontmatterLines += "description: $desc"
    $frontmatterLines += "category: $Category"
    
    $tagStr = if ($Tags) { 
        $cleanTags = $Tags -split ',' | ForEach-Object { $_.Trim() }
        "'$($cleanTags -join "', '")'"
    } else { '' }
    $frontmatterLines += "tags: [$tagStr]"
    
    $frontmatterLines += "---"
    $frontmatterLines += ""
    $frontmatterLines += "## Start writing your article here"
    $frontmatterLines += ""
    $frontmatterLines += "Please write your blog article content here."
    $frontmatterLines += ""
    $frontmatterLines += "### Writing tips"
    $frontmatterLines += ""
    $frontmatterLines += "1. **Introduction**: Introduce the article background and purpose"
    $frontmatterLines += "2. **Main content**: Expand in sections"
    $frontmatterLines += "3. **Code examples**: Use code blocks with syntax highlighting"
    $frontmatterLines += "4. **Summary**: Review key points and takeaways"
    $frontmatterLines += "5. **Next steps**: Provide further learning suggestions"
    $frontmatterLines += ""
    $frontmatterLines += "### Markdown syntax reference"
    $frontmatterLines += ""
    $frontmatterLines += "- **Headings**: ## Level 2, ### Level 3"
    $frontmatterLines += "- **Lists**: - Item 1, - Item 2"
    $frontmatterLines += "- **Code blocks**: ```bash ... ```"
    $frontmatterLines += '- **Links**: [Text](URL)'
    $frontmatterLines += "- **Images**: ![Description](image-path)"
    $frontmatterLines += ""
    $frontmatterLines += "---"
    $frontmatterLines += "*Article created at $(Get-Date -Format 'yyyy-MM-dd HH:mm')*"
    
    $frontmatter = $frontmatterLines -join "`n"
    
    # 4. Write file
    Write-Step "Writing file..."
    $frontmatter | Out-File -FilePath $filePath -Encoding UTF8
    Write-Success "Article file created successfully: $filePath"
    
    # 5. Open file for editing (optional)
    $openEditor = Read-Host "Open file with default editor? (y/N)"
    if ($openEditor -eq 'y' -or $openEditor -eq 'Y') {
        Write-Info "Opening editor..."
        Start-Process $filePath
    }
    
    if ($Draft) {
        Write-Warning "Draft mode: File created but not committed to GitHub"
        Write-Info "You can manually commit later: git add $Category/$fileName"
        return
    }
    
    # 6. Git operations
    Write-Step "Git commit..."
    $gitStatus = git status --porcelain 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Git command failed, make sure you're in a Git repository directory"
    }
    
    # Add file
    git add "$Category/$fileName" 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git add file failed"
    }
    Write-Success "File added to Git staging area"
    
    # Commit
    $commitMessage = "feat: add $Category article - $Title"
    git commit -m $commitMessage 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git commit failed"
    }
    Write-Success "Commit successful: $commitMessage"
    
    # 7. Push to GitHub
    Write-Step "Pushing to GitHub..."
    git push origin main 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git push failed, check network connection or permissions"
    }
    Write-Success "Push successful!"
    
    # 8. Display article information
    Write-Host "`n📊 Article Publication Information" -ForegroundColor Magenta
    Write-Host "-" * 40
    Write-Info "Article title: $Title"
    Write-Info "Article category: $Category"
    Write-Info "File location: $Category/$fileName"
    Write-Info "Local path: $filePath"
    Write-Info "Commit hash: $(git rev-parse --short HEAD)"
    
    # 9. GitHub Pages deployment status
    Write-Step "Checking GitHub Pages deployment status..."
    Start-Sleep -Seconds 3  # Give GitHub some time
    
    $pagesUrl = "https://attraction11.github.io/$Category/$($fileName -replace '\.md$', '')"
    Write-Info "Article will be published at:"
    Write-Host "  $pagesUrl" -ForegroundColor $ColorCyan
    Write-Info "Deployment usually takes 1-3 minutes to complete"
    
    # 10. Monitoring options
    $monitor = Read-Host "`nMonitor deployment status? (y/N)"
    if ($monitor -eq 'y' -or $monitor -eq 'Y') {
        Write-Info "Use command to monitor deployment: gh builds"
        Write-Info "Or: gh run list --repo attraction11/attraction11.github.io --workflow 'Build and Deploy'"
    }
    
    Write-Host "`n🎉 Blog article publishing process completed!" -ForegroundColor Green
    Write-Host "=" * 50
    
} catch {
    Write-ErrorMsg "Error during publishing process: $($_.Exception.Message)"
    Write-Warning "Please check error message and try again"
    exit 1
}

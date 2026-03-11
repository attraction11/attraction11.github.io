# Simple Blog Publishing Script
# Avoids encoding issues by using minimal formatting

param(
    [Parameter(Mandatory=$true)]
    [string]$Title,
    
    [string]$Category = "VibeCoding",
    
    [string]$Description,
    
    [switch]$Draft
)

$ErrorActionPreference = "Stop"

try {
    Write-Host "Blog Publishing Tool" -ForegroundColor Cyan
    Write-Host "===================="
    
    Write-Host "Title: $Title"
    Write-Host "Category: $Category"
    if ($Description) { Write-Host "Description: $Description" }
    
    # Generate filename
    $date = Get-Date -Format "yyyy-MM-dd"
    $slug = $Title -replace '[^\w\s-]', '' -replace '\s+', '-'
    $fileName = "$date-$slug.md"
    $filePath = "$PSScriptRoot/../$Category/$fileName"
    
    Write-Host "Creating: $filePath"
    
    # Check if file exists
    if (Test-Path $filePath) {
        Write-Host "Error: File already exists" -ForegroundColor Red
        return
    }
    
    # Create directory
    $categoryDir = "$PSScriptRoot/../$Category"
    if (-not (Test-Path $categoryDir)) {
        New-Item -ItemType Directory -Path $categoryDir -Force | Out-Null
    }
    
    # Create Frontmatter
    $desc = if ($Description) { $Description } else { $Title }
    $frontmatter = @"
---
title: $Title
date: $date
description: $desc
category: $Category
---

## Article Content

Write your article here.

"@
    
    # Write file
    $frontmatter | Out-File -FilePath $filePath -Encoding UTF8
    Write-Host "File created: $filePath" -ForegroundColor Green
    
    if ($Draft) {
        Write-Host "Draft mode: File created but not pushed" -ForegroundColor Yellow
        return
    }
    
    # Git operations
    Write-Host "Committing to Git..." -ForegroundColor Cyan
    
    git add "$Category/$fileName" 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git add failed"
    }
    
    $commitMessage = "feat: add $Category article - $Title"
    git commit -m $commitMessage 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git commit failed"
    }
    
    git push origin main 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        throw "Git push failed"
    }
    
    Write-Host "Successfully published!" -ForegroundColor Green
    
    $pagesUrl = "https://attraction11.github.io/$Category/$($fileName -replace '\.md$', '')"
    Write-Host "URL: $pagesUrl" -ForegroundColor Cyan
    Write-Host "Deployment may take 1-3 minutes." -ForegroundColor Yellow
    
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
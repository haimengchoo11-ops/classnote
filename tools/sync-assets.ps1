# Copy the website into the Android app's assets folder.
# Run from anywhere: powershell -ExecutionPolicy Bypass -File tools\sync-assets.ps1
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$dst  = Join-Path $root "android\app\src\main\assets"

# folders that are not part of the website
$excludeDirs = @(".git", "android", "docs", "tools", ".github", "node_modules", ".idea", ".vscode")
$excludeFiles = @("README.md", ".gitignore")

if (Test-Path $dst) { Remove-Item -Recurse -Force $dst }
New-Item -ItemType Directory -Force -Path $dst | Out-Null

$robocopyArgs = @($root, $dst, "/E", "/NFL", "/NDL", "/NJH", "/NJS", "/NP", "/R:1", "/W:1")
$robocopyArgs += "/XD"
$robocopyArgs += $excludeDirs
$robocopyArgs += "/XF"
$robocopyArgs += $excludeFiles

robocopy @robocopyArgs | Out-Null
$code = $LASTEXITCODE
if ($code -ge 8) { throw "robocopy failed with exit code $code" }

$size = (Get-ChildItem $dst -Recurse -File | Measure-Object Length -Sum).Sum
"assets synced: {0:N1} MB -> {1}" -f ($size / 1MB), $dst
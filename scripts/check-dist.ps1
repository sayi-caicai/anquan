param(
  [string]$DistPath = ".\dist"
)

$ErrorActionPreference = "Stop"

$resolvedDist = Resolve-Path -LiteralPath $DistPath
$requiredFiles = @(
  "index.html",
  "src\main.js",
  "src\styles.css",
  "assets\levels\level-1.jpg",
  "assets\levels\level-2.jpg",
  "assets\levels\level-3.jpg",
  "assets\levels\level-4.jpg",
  "assets\levels\level-5.jpg",
  "README_DEPLOY_CN.md",
  "WECHAT_TEST_CHECKLIST.md"
)

$missing = @()
foreach ($file in $requiredFiles) {
  $path = Join-Path $resolvedDist $file
  if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
    $missing += $file
  }
}

if ($missing.Count -gt 0) {
  Write-Error ("Missing required files: " + ($missing -join ", "))
}

$badPatterns = @(
  "type=`"module`"",
  "fetch(",
  "sessionStorage",
  "localStorage",
  "pointerdown",
  "100dvh",
  "netlify.app"
)

$runtimePaths = @(
  (Join-Path $resolvedDist "index.html"),
  (Join-Path $resolvedDist "src")
)

$textFiles = @()
foreach ($runtimePath in $runtimePaths) {
  if (Test-Path -LiteralPath $runtimePath -PathType Leaf) {
    $textFiles += Get-Item -LiteralPath $runtimePath
  } elseif (Test-Path -LiteralPath $runtimePath -PathType Container) {
    $textFiles += Get-ChildItem -LiteralPath $runtimePath -Recurse -File -Include *.js,*.css
  }
}
$hits = @()
foreach ($pattern in $badPatterns) {
  $found = $textFiles | Select-String -SimpleMatch -Pattern $pattern
  if ($found) {
    $hits += $found
  }
}

if ($hits.Count -gt 0) {
  $hits | ForEach-Object {
    Write-Host ("WARN {0}:{1}: {2}" -f $_.Path, $_.LineNumber, $_.Line.Trim()) -ForegroundColor Yellow
  }
}

$totalBytes = (Get-ChildItem -LiteralPath $resolvedDist -Recurse -File | Measure-Object -Property Length -Sum).Sum
$levelImages = Get-ChildItem -LiteralPath (Join-Path $resolvedDist "assets\levels") -File -Filter *.jpg

Write-Host "Dist check passed." -ForegroundColor Green
Write-Host ("Path: {0}" -f $resolvedDist)
Write-Host ("Total size: {0} MB" -f ([math]::Round($totalBytes / 1MB, 2)))
Write-Host "Level images:"
$levelImages | Select-Object Name, Length | Format-Table -AutoSize

if ($totalBytes -gt 5MB) {
  Write-Host "WARN Total package is larger than 5 MB. Consider stronger image compression." -ForegroundColor Yellow
}

# Deploy Portfolio → CDN Unificado
$bucket = "sstech-cdn-unified"
$prefix = "portfolio"
$distributionId = "E9ZQJ3RPSA04N"

Write-Host "=== Deploy Portfolio para CDN Unificado ===" -ForegroundColor Cyan

Write-Host "Sincronizando arquivos..." -ForegroundColor Yellow
aws s3 sync . s3://$bucket/$prefix/ `
  --exclude ".git/*" `
  --exclude "*/node_modules/*" `
  --exclude "*.md" `
  --exclude "*.bat" `
  --exclude "*.ps1" `
  --exclude "_archive/*" `
  --cache-control "public, max-age=3600"

Write-Host "Invalidando cache..." -ForegroundColor Yellow
aws cloudfront create-invalidation --distribution-id $distributionId --paths "/$prefix/*"

Write-Host "Deploy concluido!" -ForegroundColor Green
Write-Host "URL: https://dev-cloud.sstechnologies-cloud.com" -ForegroundColor Cyan

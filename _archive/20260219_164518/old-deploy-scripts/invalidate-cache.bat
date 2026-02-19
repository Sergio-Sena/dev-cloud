@echo off
echo ========================================
echo INVALIDACAO DE CACHE - PORTFOLIO
echo ========================================

REM Substitua E1234567890ABC pelo ID da sua distribuicao CloudFront
set DISTRIBUTION_ID=E1234567890ABC

echo Invalidando cache do CloudFront...
echo Distribution ID: %DISTRIBUTION_ID%

aws cloudfront create-invalidation --distribution-id %DISTRIBUTION_ID% --paths "/*"

if %errorlevel% equ 0 (
    echo.
    echo ✅ Cache invalidado com sucesso!
    echo Seu portfolio esta atualizado!
) else (
    echo.
    echo ❌ Erro ao invalidar cache
    echo Verifique se o Distribution ID esta correto
)

echo ========================================
pause
# 🚀 Guia de Deploy - Dev Cloud Portfolio

## Deploy Rápido para AWS S3 + CloudFront

### Pré-requisitos
```bash
✓ AWS CLI configurado
✓ Bucket S3 criado
✓ CloudFront distribution configurada
```

---

## 📦 Deploy Completo

### 1. Sincronizar arquivos para S3
```bash
aws s3 sync . s3://dev-cloud.sstechnologies-cloud.com \
  --exclude ".git/*" \
  --exclude "*.md" \
  --exclude "*.bat" \
  --exclude "*.ps1" \
  --cache-control "max-age=31536000"
```

### 2. Invalidar cache do CloudFront
```bash
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## ⚡ Deploy Apenas Código (sem imagens)

```bash
aws s3 sync . s3://dev-cloud.sstechnologies-cloud.com \
  --exclude "assets/images/*" \
  --exclude ".git/*" \
  --exclude "*.md"
```

---

## 🔄 Script de Deploy Automatizado

Crie `deploy.bat`:
```batch
@echo off
echo Sincronizando arquivos...
aws s3 sync . s3://dev-cloud.sstechnologies-cloud.com --exclude ".git/*" --exclude "*.md"

echo Invalidando cache...
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"

echo Deploy concluído!
pause
```

---

## ✅ Checklist Pré-Deploy

- [ ] Testar localmente
- [ ] Validar HTML/CSS
- [ ] Otimizar imagens
- [ ] Minificar JS (opcional)
- [ ] Verificar links
- [ ] Testar responsividade
- [ ] Validar acessibilidade

---

## 🌐 URLs

**Produção:** https://dev-cloud.sstechnologies-cloud.com  
**S3 Bucket:** dev-cloud.sstechnologies-cloud.com  
**CloudFront:** YOUR_DISTRIBUTION_ID

---

**Deploy time:** ~2-3 minutos  
**Cache invalidation:** ~5-10 minutos

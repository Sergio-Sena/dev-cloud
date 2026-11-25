# 📊 Relatório de Recursos AWS - SSphere Project

## ✅ BUCKETS S3 EM USO (Projetos Online)

| Bucket | Projeto | Status |
|--------|---------|--------|
| `portfolio-sergio-sena` | Portfolio dev-cloud | ✅ Online |
| `hub.sstechnologies-cloud.com` | Hub SStech | ✅ Online |
| `ritech-fechaduras-site` | Ritech Fechaduras | ✅ Online |
| `ssgestaodetrafego` | SS Gestão Tráfego | ✅ Online |
| `aws-services-dashboard-prod` | AWS Services | ✅ Online |
| `aws-cert-platform-2025` | AWS Certification | ✅ Online |
| `dva-c02-course-prod-969430605054` | DVA-C02 Course | ✅ Online |
| `financaspessoais.sstechnologies-cloud.com` | Finanças Pessoais | ✅ Online |
| `kate-kuray-portfolio-20241220` | Kate Kuray Portfolio | ✅ Online |
| `mediaflow-frontend-969430605054` | Mídiaflow Frontend | ✅ Online |
| `mediaflow-uploads-969430605054` | Mídiaflow Uploads | ✅ Online |
| `midia-devaria` | SSphere (imagens) | ✅ Online |
| `midiaflow-backups-969430605054` | Mídiaflow Backups | ✅ Online |

---

## ⚠️ BUCKETS S3 SEM USO (Candidatos para Remoção)

| Bucket | Última Modificação | Recomendação |
|--------|-------------------|--------------|
| `automacao-video` | 02/09/2025 | 🗑️ Remover (projeto não listado) |
| `docs.sena` | 15/09/2023 | 🗑️ Remover (antigo, 2+ anos) |
| `pics-notebackup` | 07/10/2023 | 🗑️ Remover (backup antigo) |
| `poco-f7` | 23/01/2026 | 🗑️ Remover (não relacionado) |
| `serverless-framework-deployments-us-east-1-63d30e2f-ee28` | 24/08/2025 | ⚠️ Verificar (pode ser necessário) |
| `smarthophone` | 17/04/2023 | 🗑️ Remover (antigo, 3+ anos) |
| `xioami-mi6` | 19/01/2024 | 🗑️ Remover (antigo, 2+ anos) |

---

## ✅ DISTRIBUIÇÕES CLOUDFRONT ATIVAS

| ID | Origem | Projeto | Status |
|----|--------|---------|--------|
| E23SOSSVGQ2NOD | portfolio-sergio-sena | Portfolio | ✅ Ativo |
| E1U10Q11WGDP01 | aws-services-dashboard-prod | AWS Services | ✅ Ativo |
| E2PT7P40RJBK38 | ritech-fechaduras-site | Ritech | ✅ Ativo |
| E32SZD5BCOGZDM | ssgestaodetrafego | SS Tráfego | ✅ Ativo |
| EW17MMXFBIMW6 | aws-cert-platform-2025 | AWS Cert | ✅ Ativo |
| E26AJFZZPE428D | dva-c02-course-prod | DVA Course | ✅ Ativo |
| E2HZKZ9ZJK18IU | execute-api (Lambda) | API Gateway | ✅ Ativo |
| E233IHQWZDF2M2 | financaspessoais | Finanças | ✅ Ativo |
| E1R9CQH6OLDP6F | kate-kuray-portfolio | Kate Kuray | ✅ Ativo |
| E20VPG27E02V7M | portfolio-sergio-sena | Portfolio (duplicado?) | ⚠️ Verificar |
| E9ZQJ3RPSA04N | mediaflow-frontend | Mídiaflow | ✅ Ativo |
| E3NCKP0XGAJRCE | aws-services-dashboard-prod | AWS Services (duplicado?) | ⚠️ Verificar |

**⚠️ ATENÇÃO:** Existem 2 distribuições para `portfolio-sergio-sena` e 2 para `aws-services-dashboard-prod`. Verificar se há duplicação.

---

## 🌐 DOMÍNIOS ROUTE 53

| Hosted Zone | Registros | Status |
|-------------|-----------|--------|
| `sstechnologies-cloud.com` | 23 registros | ✅ Ativo |

### Subdomínios Configurados:
- ✅ `dev-cloud.sstechnologies-cloud.com` → Portfolio
- ✅ `hub.sstechnologies-cloud.com` → Hub SStech
- ✅ `ssphere.sstechnologies-cloud.com` → SSphere (NOVO)
- ✅ `ritech-fechaduras-digitais.sstechnologies-cloud.com` → Ritech
- ✅ `sstrafegopago.sstechnologies-cloud.com` → SS Tráfego
- ✅ `aws-services.sstechnologies-cloud.com` → AWS Services
- ✅ `financaspessoais.sstechnologies-cloud.com` → Finanças
- ✅ `midiaflow.sstechnologies-cloud.com` → Mídiaflow
- ✅ `kate-kuray-profile.sstechnologies-cloud.com` → Kate Kuray

---

## 📋 RECOMENDAÇÕES

### 🗑️ Limpeza Imediata (Economia de Custos)
1. **Remover buckets antigos:**
   - `docs.sena` (2023)
   - `smarthophone` (2023)
   - `pics-notebackup` (2023)
   - `xioami-mi6` (2024)
   - `poco-f7` (não relacionado)
   - `automacao-video` (projeto não listado)

2. **Verificar duplicações CloudFront:**
   - Portfolio tem 2 distribuições (E23SOSSVGQ2NOD e E20VPG27E02V7M)
   - AWS Services tem 2 distribuições (E1U10Q11WGDP01 e E3NCKP0XGAJRCE)

### ⚠️ Verificar Antes de Remover
- `serverless-framework-deployments-us-east-1-63d30e2f-ee28` (pode ser usado por Lambda)

---

## 💰 ECONOMIA ESTIMADA

- **7 buckets S3 para remover** → ~$0.50-2.00/mês
- **2-4 distribuições CloudFront duplicadas** → ~$0.60-1.20/mês
- **Total estimado:** $1.10-3.20/mês

---

## ✅ PROJETOS ONLINE CONFIRMADOS

1. ✅ SSphere - https://ssphere.sstechnologies-cloud.com
2. ✅ Portfolio - https://dev-cloud.sstechnologies-cloud.com
3. ✅ Hub SStech - https://hub.sstechnologies-cloud.com
4. ✅ Ritech - https://ritech-fechaduras-digitais.sstechnologies-cloud.com
5. ✅ SS Tráfego - https://sstrafegopago.sstechnologies-cloud.com
6. ✅ AWS Services - https://aws-services.sstechnologies-cloud.com
7. ✅ Finanças - https://financaspessoais.sstechnologies-cloud.com
8. ✅ Mídiaflow - https://midiaflow.sstechnologies-cloud.com
9. ✅ Kate Kuray - https://kate-kuray-profile.sstechnologies-cloud.com
10. ✅ AWS Cert Platform - https://sergio-sena.github.io/AWS-Certification-Platform/

---

**Data do Relatório:** 24/02/2026  
**Total de Recursos Ativos:** 13 buckets + 12 distribuições CloudFront + 1 hosted zone

# 🗑️ Recursos AWS para Deletar - Auditoria Completa

**Data:** 24/02/2026  
**Economia Total Estimada:** $2.60-4.70/mês

---

## ✅ JÁ DELETADO

### S3 Buckets (1)
- ✅ `automacao-video` (269 KB) - Deletado com sucesso

---

## ⏳ EM PROCESSO DE DESABILITAÇÃO

### CloudFront (1)
- ⏳ **E3NCKP0XGAJRCE** (aws-services duplicado)
  - Status: Deployed (aguardando desabilitação)
  - Motivo: Sem alias, origens com buckets deletados
  - Economia: ~$0.60/mês
  - **Ação:** Aguardar 15-20min e deletar

---

## 🗑️ PRONTO PARA DELETAR

### 1️⃣ API Gateway (2 APIs)

#### processing-service-v3-api
- **ID:** 23n5qcinkj
- **Motivo:** Sem stage deployado
- **Comando:**
```bash
aws apigateway delete-rest-api --rest-api-id 23n5qcinkj
```

#### upload-service-v3-api
- **ID:** u1mooix2e9
- **Motivo:** 0 invocações nos últimos 30 dias, não referenciado no código
- **Comando:**
```bash
aws apigateway delete-rest-api --rest-api-id u1mooix2e9
```

**Economia:** ~$0.50/mês

---

### 2️⃣ Lambda Functions (8 funções, ~15 MB)

#### Lambdas v3 com API Gateway (mas sem uso)
1. **auth-service-v3** (750 B)
   - Trigger: API Gateway
   - Última execução: Nunca
   - Invocações (30d): 0
   ```bash
   aws lambda delete-function --function-name auth-service-v3
   ```

2. **file-manager-service-v3** (861 B)
   - Trigger: API Gateway
   - Última execução: Nunca
   - Invocações (30d): 0
   ```bash
   aws lambda delete-function --function-name file-manager-service-v3
   ```

3. **upload-service-v3** (903 B)
   - Trigger: API Gateway (u1mooix2e9)
   - Última execução: Nunca
   - Invocações (30d): 0
   ```bash
   aws lambda delete-function --function-name upload-service-v3
   ```

4. **auth-simple** (993 B)
   - Trigger: API Gateway (outra conta)
   - Última execução: Nunca
   - Invocações (30d): 0
   ```bash
   aws lambda delete-function --function-name auth-simple
   ```

#### Lambdas v3 sem trigger
5. **conversion-service-v3** (3.7 KB)
   - Trigger: Nenhum
   - Última execução: Nunca
   ```bash
   aws lambda delete-function --function-name conversion-service-v3
   ```

6. **processing-service-v3** (14 MB) ⚠️ GRANDE
   - Trigger: Nenhum
   - Última execução: Nunca
   ```bash
   aws lambda delete-function --function-name processing-service-v3
   ```

7. **conversion-complete-v3** (801 B)
   - Trigger: Nenhum
   - Última execução: Nunca
   ```bash
   aws lambda delete-function --function-name conversion-complete-v3
   ```

8. **video-service-v3** (tamanho desconhecido)
   - Trigger: Desconhecido
   - Última execução: Nunca
   ```bash
   aws lambda delete-function --function-name video-service-v3
   ```

**Economia:** ~$1.50-2.50/mês

---

### 3️⃣ CloudWatch Log Groups (8 grupos)

Após deletar as Lambdas, deletar os logs:

```bash
aws logs delete-log-group --log-group-name /aws/lambda/auth-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/file-manager-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/upload-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/auth-simple
aws logs delete-log-group --log-group-name /aws/lambda/conversion-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/processing-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/conversion-complete-v3
aws logs delete-log-group --log-group-name /aws/lambda/video-service-v3
```

**Economia:** ~$0.10/mês (logs armazenados)

---

## 📊 RESUMO

| Tipo | Quantidade | Economia/Mês |
|------|------------|--------------|
| S3 Buckets | 1 (deletado) | $0.10 |
| CloudFront | 1 (aguardando) | $0.60 |
| API Gateway | 2 | $0.50 |
| Lambda Functions | 8 (~15 MB) | $1.50-2.50 |
| CloudWatch Logs | 8 grupos | $0.10 |
| **TOTAL** | **20 recursos** | **$2.80-3.80/mês** |

---

## 🚀 SCRIPT DE DELEÇÃO AUTOMÁTICA

### Deletar APIs v3
```bash
aws apigateway delete-rest-api --rest-api-id 23n5qcinkj
aws apigateway delete-rest-api --rest-api-id u1mooix2e9
```

### Deletar Lambdas v3
```bash
aws lambda delete-function --function-name auth-service-v3
aws lambda delete-function --function-name file-manager-service-v3
aws lambda delete-function --function-name upload-service-v3
aws lambda delete-function --function-name auth-simple
aws lambda delete-function --function-name conversion-service-v3
aws lambda delete-function --function-name processing-service-v3
aws lambda delete-function --function-name conversion-complete-v3
aws lambda delete-function --function-name video-service-v3
```

### Deletar Logs
```bash
aws logs delete-log-group --log-group-name /aws/lambda/auth-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/file-manager-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/upload-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/auth-simple
aws logs delete-log-group --log-group-name /aws/lambda/conversion-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/processing-service-v3
aws logs delete-log-group --log-group-name /aws/lambda/conversion-complete-v3
aws logs delete-log-group --log-group-name /aws/lambda/video-service-v3
```

### Deletar CloudFront (após desabilitação completa)
```bash
# Aguardar 15-20 minutos após desabilitação
aws cloudfront get-distribution --id E3NCKP0XGAJRCE --query "Distribution.Status"
# Se retornar "Deployed" e Enabled=false, deletar:
aws cloudfront delete-distribution --id E3NCKP0XGAJRCE --if-match <ETAG>
```

---

## ⚠️ RECURSOS MANTIDOS (Storage Pessoal)

Estes buckets foram identificados como storage pessoal e NÃO serão deletados:
- `docs.sena` (2023)
- `pics-notebackup` (2023)
- `poco-f7` (2026)
- `smarthophone` (2023)
- `xioami-mi6` (2024)

---

## ✅ VALIDAÇÃO PÓS-DELEÇÃO

Após executar as deleções, validar:

```bash
# Verificar APIs deletadas
aws apigateway get-rest-apis --query "items[?contains(name, 'v3')]"

# Verificar Lambdas deletadas
aws lambda list-functions --query "Functions[?contains(FunctionName, 'v3')]"

# Verificar CloudFront
aws cloudfront list-distributions --query "DistributionList.Items[?Id=='E3NCKP0XGAJRCE']"
```

---

**Criado por:** Amazon Q  
**Última atualização:** 24/02/2026 19:00

# Script para remover o campo keywords de todas as paginas principais
# para que elas herdem as palavras-chave globais do layout

$files = @(
    "src/app/sobre/page.tsx",
    "src/app/veritus/page.tsx", 
    "src/app/ventures/page.tsx",
    "src/app/stratevo/page.tsx",
    "src/app/termos/page.tsx",
    "src/app/sitemap/page.tsx",
    "src/app/radar360/page.tsx",
    "src/app/labs/page.tsx",
    "src/app/finx/page.tsx",
    "src/app/engage/page.tsx",
    "src/app/exceltta/page.tsx",
    "src/app/ecossistema/page.tsx",
    "src/app/core/page.tsx",
    "src/app/contato/page.tsx",
    "src/app/connecta/page.tsx",
    "src/app/academy/page.tsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "Processando: $file"
        
        # Ler o conteudo do arquivo
        $content = Get-Content $file -Raw
        
        # Remover a linha keywords: e a linha seguinte se for uma string longa
        $content = $content -replace "keywords:\s*'[^']*',?\s*\n", ""
        $content = $content -replace "keywords:\s*`"[^`"]*`",?\s*\n", ""
        
        # Salvar o arquivo
        Set-Content $file $content -Encoding UTF8
        
        Write-Host "Concluido: $file"
    } else {
        Write-Host "Arquivo nao encontrado: $file"
    }
}

Write-Host "Processo concluido! Todas as paginas agora herdam as palavras-chave globais." 
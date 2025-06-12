import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

// Lista completa de palavras-chave para SEO e Google Ads
const keywordsList = "Consultoria em exportação, Consultoria em importação, Exportação de produtos, Logística internacional, 3PL, 4PL, Como Exportar Legalmente?, Especialistas em Comex, Abra sua Importadora!, Importação Sem Burocracia, Suporte Total no Comex, Comex para Empresas PME, Planeje sua Exportação, Importar com Segurança, Exportação para Iniciantes, Documentação de Comex, Treinamento em Comércio, Desembaraço Aduaneiro Rápido, Planejamento Tributário Comex, Passo a Passo da Exportação, Exportar Alimentos do Brasil, Importar com Redução Fiscal, Consultoria para Radar SISCOMEX, Regularize sua Empresa Comex, Exportar com Baixo Custo, Importação para Revenda, Exportação Café e Soja, Logística 3PL para Exportação, Montamos sua Operação Comex, Suporte do Radar ao Embarque, Exportação Sem Erros, Reduza Custos de Importação, Exportação Legalizada e Fácil, Exportar com Lucro Real, Reduza erros e custos com nossa consultoria completa em importação e exportação, Ajudamos sua empresa a operar legalmente e com mais eficiência no comércio exterior, Suporte completo: Radar, tributos, logística e operação, Fale com nossos especialistas!, Comex sem mistérios, Tenha acompanhamento em todas as etapas da importação";

export const metadata = {
  title: "OLV Internacional - Consultoria em Comércio Exterior",
  description: "Especialistas em comércio exterior, importação, exportação e logística internacional. Soluções completas e personalizadas para PMEs que buscam expandir seus negócios globalmente com segurança e eficiência.",
  keywords: keywordsList
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="keywords" content={keywordsList} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Metadados adicionais para otimização de intenção do usuário */}
        <meta name="google-site-verification" content="verificação-do-site" />
        <meta name="author" content="OLV Internacional" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Portuguese" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.placename" content="São Paulo" />

        {/* Open Graph para compartilhamento em redes sociais */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://olvinternacional.com.br" />
        <meta property="og:image" content="https://olvinternacional.com.br/images/olv-logo.jpeg" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://olvinternacional.com.br/images/olv-logo.jpeg" />

        {/* Schema.org Markup for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OLV Internacional",
              "description": "Consultoria especializada em comércio exterior, importação, exportação e logística internacional para PMEs",
              "url": "https://olvinternacional.com.br",
              "logo": "https://olvinternacional.com.br/images/olv-logo.jpeg",
              "sameAs": [
                "https://www.linkedin.com/company/26251289/admin/dashboard/",
                "https://www.instagram.com/olvinternacional",
                "https://www.facebook.com/olvinternacional"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-2675-1446",
                "contactType": "customer service",
                "email": "atendimento@olvinternacional.com.br",
                "areaServed": "BR"
              }
            })
          }}
        />

        {/* Schema para FAQ - Aumenta as chances de featured snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Como iniciar a exportação de produtos do Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para iniciar a exportação de produtos do Brasil, é necessário obter um Radar SISCOMEX, realizar a habilitação da empresa junto à Receita Federal, definir a classificação fiscal (NCM) dos produtos, e estruturar a operação logística e cambial. A OLV Internacional oferece consultoria completa, do Radar SISCOMEX ao embarque."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como reduzir custos na importação?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para reduzir custos na importação, recomenda-se: realizar planejamento tributário adequado, avaliar benefícios fiscais disponíveis, otimizar a logística internacional, buscar fornecedores confiáveis, e estruturar operacionalmente o processo. A OLV Internacional oferece consultoria especializada em redução de custos e otimização tributária para importadores."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais documentos são necessários para exportar do Brasil?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Os principais documentos para exportação do Brasil incluem: Registro de Exportação (RE), Fatura Comercial (Commercial Invoice), Packing List, Conhecimento de Embarque (B/L ou AWB), Certificado de Origem, e documentos específicos dependendo do produto e país de destino. A OLV Internacional oferece suporte completo na documentação para exportação."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} theme-dark`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
} 
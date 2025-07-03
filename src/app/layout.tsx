import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OLV Internacional - Soluções em Comércio Exterior',
  description: 'Plataforma completa para importação, exportação e logística internacional',
  keywords: 'comércio exterior, importação, exportação, logística internacional, supply chain, consultoria comex, radar siscomex, despacho aduaneiro, tributos importação, frete internacional, incoterms, ncm, drawback, ex-tarifário, compliance, due diligence, gestão de riscos, planejamento tributário, otimização de custos, mercado internacional, expansão global, PME internacional, tecnologia comex, automação logística, inteligência de mercado, análise de dados, capacitação comex, treinamento exportação, mentorias internacionais, plataformas digitais, ecossistema OLV, stratevo, exceltta, connecta, engage, finx, labs, ventures, veritus, core, academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
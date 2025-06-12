import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';

export const metadata = {
  title: 'EXCELTTA - OLV Internacional | Excelência na Gestão de Processos',
  description: 'EXCELTTA é a plataforma de gestão de processos da OLV Internacional que otimiza fluxos de trabalho, reduz ineficiências e aumenta a produtividade em operações internacionais.',
  keywords: 'gestão de processos, fluxos de trabalho, otimização de processos, automação, produtividade, comércio internacional, BPM',
};

export default function ExcelttaPage() {
  return (
    <PlatformLayout
      platformName="EXCELTTA"
      platformLogo="/images/exceltta-logo.jpeg"
      platformDescription="Excelência na Gestão de Processos"
      platformColor="#0a2463"
    >
      <section className="mb-12">
        <h2 className="section-title">Sobre a EXCELTTA</h2>
        <p className="mb-4">
          A EXCELTTA é a plataforma de gestão de processos da OLV Internacional, projetada para otimizar fluxos de trabalho, reduzir ineficiências e aumentar a produtividade em operações internacionais.
        </p>
        <p className="mb-4">
          Nossa plataforma integra metodologias comprovadas de BPM (Business Process Management) com tecnologias avançadas para simplificar operações complexas e garantir consistência nos resultados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/exceltta-simple.svg" alt="Process Mapping Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Mapeamento de Processos</h3>
            </div>
            <p>Identificação e documentação de fluxos de trabalho para visualizar oportunidades de melhoria.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/automation.svg" alt="Automation Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Automação Inteligente</h3>
            </div>
            <p>Implementação de soluções tecnológicas para automatizar tarefas repetitivas e reduzir erros humanos.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart.svg" alt="Monitoring Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Monitoramento Contínuo</h3>
            </div>
            <p>Acompanhamento em tempo real de KPIs para identificar gargalos e oportunidades de melhoria.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Serviços EXCELTTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/qualification.svg" alt="Consulting Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Consultoria em Processos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Diagnóstico de processos existentes</li>
              <li>Redesenho de fluxos de trabalho</li>
              <li>Implementação de metodologias ágeis</li>
              <li>Treinamento de equipes</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/tech-value.svg" alt="Document Management Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Gestão Documental</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Digitalização de documentos</li>
              <li>Implementação de workflows digitais</li>
              <li>Controle de versões e aprovações</li>
              <li>Conformidade com regulamentações</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/automation.svg" alt="Process Automation Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Automação de Processos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identificação de oportunidades de automação</li>
              <li>Desenvolvimento de fluxos automatizados</li>
              <li>Integração com sistemas existentes</li>
              <li>Redução de intervenção manual</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/analytics.svg" alt="Performance Analysis Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-xl">Análise de Performance</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Definição de KPIs relevantes</li>
              <li>Implementação de dashboards de controle</li>
              <li>Identificação de gargalos operacionais</li>
              <li>Recomendações baseadas em dados</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Benefícios EXCELTTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/rocket.svg" alt="Efficiency Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Maior Eficiência Operacional</h3>
            </div>
            <p>Redução de tempo e recursos necessários para executar processos críticos do negócio.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/check.svg" alt="Error Reduction Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Menor Taxa de Erros</h3>
            </div>
            <p>Padronização e automação que minimizam falhas humanas e garantem consistência nas operações.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart.svg" alt="Data Decision Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Tomada de Decisão Baseada em Dados</h3>
            </div>
            <p>Visibilidade completa do desempenho dos processos para decisões mais assertivas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/chart-bar.svg" alt="Scalability Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Escalabilidade</h3>
            </div>
            <p>Processos otimizados que permitem crescimento sem aumento proporcional de custos operacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/compliance.svg" alt="Compliance Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Conformidade Regulatória</h3>
            </div>
            <p>Garantia de que todos os processos estão alinhados com requisitos legais e regulatórios internacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <img src="/icons/integration.svg" alt="Agility Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg">Agilidade para Mudanças</h3>
            </div>
            <p>Flexibilidade para adaptar processos rapidamente em resposta a mudanças no mercado ou regulamentações.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">"A implementação da metodologia EXCELTTA transformou nossa operação logística internacional. Reduzimos o tempo de processamento de pedidos em 40% e praticamente eliminamos erros documentais."</p>
            <p className="font-semibold">Pedro Almeida</p>
            <p className="text-sm text-gray-600">Diretor de Operações, LogisBrasil</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">"A automação de processos desenvolvida pela equipe EXCELTTA nos permitiu escalar nossas operações sem precisar aumentar proporcionalmente nossa equipe. Resultado: crescimento de 60% em receita com apenas 15% de aumento em custos operacionais."</p>
            <p className="font-semibold">Luciana Campos</p>
            <p className="text-sm text-gray-600">COO, TradeTech Solutions</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Como a EXCELTTA pode identificar ineficiências nos processos da minha empresa?
            </div>
            <div className="p-4">
              A EXCELTTA utiliza uma metodologia proprietária de diagnóstico que combina mapeamento detalhado de processos, análise de dados operacionais e benchmarking com melhores práticas do setor. Nossos especialistas realizam entrevistas com stakeholders, observam operações e analisam documentação existente para identificar gargalos, redundâncias e oportunidades de melhoria nos fluxos de trabalho.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Quais tipos de processos podem ser otimizados com a EXCELTTA?
            </div>
            <div className="p-4">
              A EXCELTTA é versátil e pode otimizar diversos tipos de processos, incluindo operações logísticas internacionais, gestão de documentação aduaneira, processos de compliance, fluxos de aprovação, controle de qualidade, gestão de fornecedores, processos financeiros relacionados ao comércio exterior, e muito mais. Nossa plataforma é adaptável a qualquer processo estruturado que possua etapas bem definidas.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              Quanto tempo leva para implementar as soluções EXCELTTA?
            </div>
            <div className="p-4">
              O tempo de implementação varia de acordo com a complexidade dos processos e o escopo do projeto. Projetos menores focados em um único processo podem ser implementados em 4-6 semanas, enquanto transformações mais amplas podem levar de 3 a 6 meses. Trabalhamos com uma abordagem ágil, entregando resultados incrementais para que sua empresa comece a colher benefícios mais rapidamente.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <img src="/icons/faq.svg" alt="FAQ Icon" className="w-5 h-5 mr-2" />
              As soluções EXCELTTA se integram com sistemas existentes?
            </div>
            <div className="p-4">
              Sim, desenvolvemos nossas soluções com foco na integração. A EXCELTTA pode se conectar com ERPs, CRMs, sistemas de gestão de documentos, plataformas de comércio exterior e praticamente qualquer sistema que possua APIs ou outras interfaces de integração. Isso permite que os dados fluam sem retrabalho e que os processos sejam verdadeiramente end-to-end, eliminando ilhas de automação.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Pronto para transformar seus processos?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a EXCELTTA pode ajudar sua empresa a alcançar excelência operacional no comércio internacional.</p>
          <Link href="/contato" className="inline-block bg-blue-800 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-900 transition duration-300 flex items-center justify-center">
            <img src="/icons/specialist.svg" alt="Specialist Icon" className="w-5 h-5 mr-2" />
            Fale com um Especialista
          </Link>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "EXCELTTA",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma de gestão de processos para otimizar fluxos de trabalho e aumentar a produtividade em operações internacionais.",
            "serviceType": "Gestão de Processos e Otimização de Workflow",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })
        }}
      />
    </PlatformLayout>
  );
} 
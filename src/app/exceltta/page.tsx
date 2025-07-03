import React from 'react';
import Link from 'next/link';
import PlatformLayout from '../../components/platforms/PlatformLayout';
import Icon from '../../components/icons/Icon';
import Accordion from '../../components/ui/Accordion';

export const metadata = {
  title: 'EXCELTTA - OLV Internacional | ExcelÃªncia na GestÃ£o de Processos',
  description: 'EXCELTTA Ã© a plataforma de gestÃ£o de processos da OLV Internacional que otimiza fluxos de trabalho, reduz ineficiÃªncias e aumenta a produtividade em operaÃ§Ãµes internacionais.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/exceltta'
  },
};

export default function ExcelttaPage() {
  return (
    <PlatformLayout
      platformName="EXCELTTA"
      platformLogo="/images/exceltta-logo.jpeg"
      platformDescription="ExcelÃªncia na GestÃ£o de Processos"
      platformIntro="A EXCELTTA Ã© a plataforma de gestÃ£o de processos da OLV Internacional, projetada para otimizar fluxos de trabalho e elevar a produtividade em operaÃ§Ãµes internacionais."
      platformColor="#0F5F66"
    >
      <section className="mb-12">
        <h2 className="section-title">Como a EXCELTTA ajuda sua empresa</h2>
        <p className="mb-4">
          Se vocÃª Ã© uma PME que lida com planilhas infinitas, retrabalho e atrasos por falta de padronizaÃ§Ã£o, a EXCELTTA foi criada exatamente para esse cenÃ¡rio. Nossa metodologia proprietÃ¡ria de mapeamento de processos identifica gargalos e automatiza etapas repetitivas, liberando seu time para atividades de maior valor.
        </p>
        <p className="mb-4">
          Integramos BPM, automaÃ§Ã£o low-code e mÃ©tricas em tempo real. O resultado? ReduÃ§Ã£o de custos operacionais, tomada de decisÃ£o baseada em dados e escalabilidade sem aumentar headcount. Tudo isso em um painel simples, sem jargÃµes tÃ©cnicos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/exceltta-simple.svg" alt="Process Mapping Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Mapeamento de Processos</h3>
            </div>
            <p>IdentificaÃ§Ã£o e documentaÃ§Ã£o de fluxos de trabalho para visualizar oportunidades de melhoria.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/automation.svg" alt="Automation Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AutomaÃ§Ã£o Inteligente</h3>
            </div>
            <p>ImplementaÃ§Ã£o de soluÃ§Ãµes tecnolÃ³gicas para automatizar tarefas repetitivas e reduzir erros humanos.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Monitoring Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Monitoramento ContÃ­nuo</h3>
            </div>
            <p>Acompanhamento em tempo real de KPIs para identificar gargalos e oportunidades de melhoria.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">ServiÃ§os EXCELTTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/qualification.svg" alt="Consulting Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Consultoria em Processos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>DiagnÃ³stico de processos existentes</li>
              <li>Redesenho de fluxos de trabalho</li>
              <li>ImplementaÃ§Ã£o de metodologias Ã¡geis</li>
              <li>Treinamento de equipes</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/tech-value.svg" alt="Document Management Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">GestÃ£o Documental</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>DigitalizaÃ§Ã£o de documentos</li>
              <li>ImplementaÃ§Ã£o de workflows digitais</li>
              <li>Controle de versÃµes e aprovaÃ§Ãµes</li>
              <li>Conformidade com regulamentaÃ§Ãµes</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/automation.svg" alt="Process Automation Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AutomaÃ§Ã£o de Processos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>IdentificaÃ§Ã£o de oportunidades de automaÃ§Ã£o</li>
              <li>Desenvolvimento de fluxos automatizados</li>
              <li>IntegraÃ§Ã£o com sistemas existentes</li>
              <li>ReduÃ§Ã£o de intervenÃ§Ã£o manual</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/analytics.svg" alt="Performance Analysis Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">AnÃ¡lise de Performance</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>DefiniÃ§Ã£o de KPIs relevantes</li>
              <li>ImplementaÃ§Ã£o de dashboards de controle</li>
              <li>IdentificaÃ§Ã£o de gargalos operacionais</li>
              <li>RecomendaÃ§Ãµes baseadas em dados</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">BenefÃ­cios EXCELTTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/rocket.svg" alt="Efficiency Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Maior EficiÃªncia Operacional</h3>
            </div>
            <p>ReduÃ§Ã£o de tempo e recursos necessÃ¡rios para executar processos crÃ­ticos do negÃ³cio.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/check.svg" alt="Error Reduction Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Menor Taxa de Erros</h3>
            </div>
            <p>PadronizaÃ§Ã£o e automaÃ§Ã£o que minimizam falhas humanas e garantem consistÃªncia nas operaÃ§Ãµes.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Data Decision Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Tomada de DecisÃ£o Baseada em Dados</h3>
            </div>
            <p>Visibilidade completa do desempenho dos processos para decisÃµes mais assertivas.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart-bar.svg" alt="Scalability Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Escalabilidade</h3>
            </div>
            <p>Processos otimizados que permitem crescimento sem aumento proporcional de custos operacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/compliance.svg" alt="Compliance Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Conformidade RegulatÃ³ria</h3>
            </div>
            <p>Garantia de que todos os processos estÃ£o alinhados com requisitos legais e regulatÃ³rios internacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/integration.svg" alt="Agility Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-lg">Agilidade para MudanÃ§as</h3>
            </div>
            <p>Flexibilidade para adaptar processos rapidamente em resposta a mudanÃ§as no mercado ou regulamentaÃ§Ãµes.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">CenÃ¡rios de Uso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Lead Time Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">ReduÃ§Ã£o de Lead Time</h3>
            </div>
            <p>Empresas que dependem de mÃºltiplas aprovaÃ§Ãµes internas passam a executar o mesmo fluxo 35 % mais rÃ¡pido apÃ³s a automaÃ§Ã£o de tarefas e alertas inteligentes.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/automation.svg" alt="Erro Icon" size="md" className="mr-2 w-6 h-6" />
              <h3 className="text-xl">Queda na Taxa de Erros</h3>
            </div>
            <p>Processos padronizados com checklists inteligentes reduzem em atÃ© 50 % a ocorrÃªncia de falhas humanas em documentos crÃ­ticos.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
        <Accordion
          items={[
            {
              question: 'Como a EXCELTTA pode identificar ineficiÃªncias nos processos da minha empresa?',
              answer:
                'A EXCELTTA utiliza uma metodologia proprietÃ¡ria de diagnÃ³stico que combina mapeamento detalhado de processos, anÃ¡lise de dados operacionais e benchmarking com melhores prÃ¡ticas do setor. Nossos especialistas realizam entrevistas com stakeholders, observam operaÃ§Ãµes e analisam documentaÃ§Ã£o existente para identificar gargalos, redundÃ¢ncias e oportunidades de melhoria nos fluxos de trabalho.',
            },
            {
              question: 'Quais tipos de processos podem ser otimizados com a EXCELTTA?',
              answer:
                'A EXCELTTA Ã© versÃ¡til e pode otimizar diversos tipos de processos, incluindo operaÃ§Ãµes logÃ­sticas internacionais, gestÃ£o de documentaÃ§Ã£o aduaneira, processos de compliance, fluxos de aprovaÃ§Ã£o, controle de qualidade, gestÃ£o de fornecedores, processos financeiros relacionados ao comÃ©rcio exterior, e muito mais. Nossa plataforma Ã© adaptÃ¡vel a qualquer processo estruturado que possua etapas bem definidas.',
            },
            {
              question: 'Quanto tempo leva para implementar as soluÃ§Ãµes EXCELTTA?',
              answer:
                'O tempo de implementaÃ§Ã£o varia de acordo com a complexidade dos processos e o escopo do projeto. Projetos menores focados em um Ãºnico processo podem ser implementados em 4-6 semanas, enquanto transformaÃ§Ãµes mais amplas podem levar de 3 a 6 meses. Trabalhamos com uma abordagem Ã¡gil, entregando resultados incrementais para que sua empresa comece a colher benefÃ­cios mais rapidamente.',
            },
            {
              question: 'As soluÃ§Ãµes EXCELTTA se integram com sistemas existentes?',
              answer:
                'Sim, desenvolvemos nossas soluÃ§Ãµes com foco na integraÃ§Ã£o. A EXCELTTA pode se conectar com ERPs, CRMs, sistemas de gestÃ£o de documentos, plataformas de comÃ©rcio exterior e praticamente qualquer sistema que possua APIs ou outras interfaces de integraÃ§Ã£o. Isso permite que os dados fluam sem retrabalho e que os processos sejam verdadeiramente end-to-end, eliminando ilhas de automaÃ§Ã£o.',
            },
          ]}
        />
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para transformar seus processos?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a EXCELTTA pode ajudar sua empresa a alcanÃ§ar excelÃªncia operacional no comÃ©rcio internacional.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6 flex items-center justify-center">
            <Icon src="/icons/specialist.svg" alt="Specialist Icon" size="md" className="mr-2 w-6 h-6" />
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
            "description": "Plataforma de gestÃ£o de processos para otimizar fluxos de trabalho e aumentar a produtividade em operaÃ§Ãµes internacionais.",
            "serviceType": "GestÃ£o de Processos e OtimizaÃ§Ã£o de Workflow",
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

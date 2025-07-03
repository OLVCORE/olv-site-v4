import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SolutionFlow from '../../components/SolutionFlow';

const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'CONNECTA - OLV Internacional | Conectando NegÃ³cios Globais',
  description: 'A plataforma CONNECTA da OLV Internacional facilita conexÃµes com fornecedores, parceiros estratÃ©gicos e soluÃ§Ãµes para comÃ©rcio internacional e logÃ­stica global.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/connecta'
  },
};

export default function ConnectaPage() {
  return (
    <PlatformLayout
      platformName="CONNECTA"
      platformLogo="/images/connecta-logo.jpeg"
      platformDescription="Conectando NegÃ³cios Globalmente"
      platformIntro="A CONNECTA Ã© a plataforma de networking da OLV Internacional, criada para conectar empresas brasileiras a parceiros estratÃ©gicos globais e abrir portas para novas oportunidades de negÃ³cios internacionais."
      platformColor="#0a2463"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">Sobre a CONNECTA</h2>
        <p className="mb-4">
          Nossa ampla rede de contatos e metodologia proprietÃ¡ria de matchmaking permite que sua empresa encontre os parceiros ideais para expandir sua presenÃ§a internacional de forma segura e eficiente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Networking EstratÃ©gico</h3>
            <p>ConexÃµes qualificadas com potenciais parceiros, distribuidores e clientes em mercados-alvo.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Matchmaking Empresarial</h3>
            <p>IdentificaÃ§Ã£o e conexÃ£o com parceiros que compartilham objetivos e complementam seu modelo de negÃ³cio.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Oportunidades Globais</h3>
            <p>Acesso a oportunidades de negÃ³cios internacionais exclusivas em nossa rede de parceiros.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">ServiÃ§os CONNECTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">IdentificaÃ§Ã£o de Parceiros</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mapeamento de potenciais parceiros em mercados-alvo</li>
              <li>VerificaÃ§Ã£o de credibilidade e compatibilidade</li>
              <li>AnÃ¡lise de complementaridade estratÃ©gica</li>
              <li>DossiÃª detalhado sobre potenciais parceiros</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Eventos de Networking</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rodadas de negÃ³cios internacionais</li>
              <li>Encontros virtuais com potenciais parceiros</li>
              <li>MissÃµes empresariais internacionais</li>
              <li>ParticipaÃ§Ã£o em feiras setoriais</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Desenvolvimento de Parcerias</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>FacilitaÃ§Ã£o de negociaÃ§Ãµes iniciais</li>
              <li>Suporte na elaboraÃ§Ã£o de acordos</li>
              <li>IntermediaÃ§Ã£o cultural e linguÃ­stica</li>
              <li>Acompanhamento pÃ³s-acordo</li>
            </ul>
          </div>
          <div className="platform-card">
            <h3 className="text-xl font-semibold mb-3 text-accent">Plataforma Digital</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Perfil empresarial internacional</li>
              <li>Sistema de matchmaking automatizado</li>
              <li>DiretÃ³rio de empresas parceiras</li>
              <li>ComunicaÃ§Ã£o segura com potenciais parceiros</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">BenefÃ­cios CONNECTA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Acesso a Novos Mercados</h3>
            <p>Entrada facilitada em mercados internacionais atravÃ©s de parceiros locais jÃ¡ estabelecidos.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">ReduÃ§Ã£o de Riscos</h3>
            <p>Parceiros prÃ©-qualificados e verificados para minimizar riscos em operaÃ§Ãµes internacionais.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">AceleraÃ§Ã£o do Crescimento</h3>
            <p>Desenvolvimento de negÃ³cios mais rÃ¡pido atravÃ©s de parceiros estratÃ©gicos com recursos complementares.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Economia de Recursos</h3>
            <p>Menor investimento em prospecÃ§Ã£o internacional e pesquisa de parceiros potenciais.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Suporte Especializado</h3>
            <p>Acompanhamento por especialistas em negÃ³cios internacionais durante todo o processo de parceria.</p>
          </div>
          <div className="platform-card">
            <h3 className="text-lg font-semibold mb-3 text-accent">Oportunidades Exclusivas</h3>
            <p>Acesso a oportunidades de negÃ³cios nÃ£o disponÃ­veis publicamente em nosso network global.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Como a CONNECTA impulsiona seus resultados</h2>
        {/* Jornada de valor */}
        <SolutionFlow
          steps={[
            {
              icon: '/icons/analytics.svg',
              title: 'DiagnÃ³stico',
              description: 'Mapeamos necessidades e perfil da sua empresa.',
            },
            {
              icon: '/icons/handshake.svg',
              title: 'Matchmaking',
              description: 'Algoritmo e curadoria conectam parceiros ideais.',
            },
            {
              icon: '/icons/chart-bar.svg',
              title: 'NegociaÃ§Ã£o',
              description: 'Facilitamos acordos e mitigamos riscos.',
            },
            {
              icon: '/icons/rocket.svg',
              title: 'Escala & Suporte',
              description: 'Acompanhamento contÃ­nuo para gerar valor.',
            },
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Como a CONNECTA seleciona potenciais parceiros para minha empresa?
            </div>
            <div className="p-4">
              Utilizamos uma metodologia proprietÃ¡ria de matchmaking que considera diversos fatores como complementaridade de negÃ³cios, objetivos estratÃ©gicos, cultura empresarial, capacidade financeira e operacional, experiÃªncia no setor e reputaÃ§Ã£o no mercado. ApÃ³s uma anÃ¡lise inicial do seu perfil e necessidades, realizamos uma busca em nossa ampla rede de contatos e bases de dados, aplicando filtros rigorosos para identificar apenas parceiros com alta probabilidade de ajuste estratÃ©gico.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Quanto tempo leva para encontrar um parceiro internacional adequado?
            </div>
            <div className="p-4">
              O tempo mÃ©dio para identificaÃ§Ã£o e qualificaÃ§Ã£o inicial de potenciais parceiros Ã© de 4 a 8 semanas, dependendo do setor, complexidade do negÃ³cio e regiÃ£o geogrÃ¡fica alvo. O processo completo atÃ© o estabelecimento formal de uma parceria geralmente leva de 3 a 6 meses, incluindo as fases de apresentaÃ§Ã£o, negociaÃ§Ã£o inicial, due diligence e formalizaÃ§Ã£o do acordo. Trabalhamos com cronogramas personalizados para cada cliente, priorizando a qualidade das conexÃµes em vez da quantidade.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              A CONNECTA atende empresas de todos os portes e setores?
            </div>
            <div className="p-4">
              Sim, trabalhamos com empresas de diferentes portes - desde startups atÃ© grandes corporaÃ§Ãµes - e diversos setores da economia. Nossa metodologia Ã© adaptada Ã s necessidades especÃ­ficas de cada cliente, independentemente do tamanho ou segmento. Para empresas menores, focamos em estratÃ©gias de entrada que minimizem riscos e investimentos iniciais, enquanto para corporaÃ§Ãµes maiores, desenvolvemos abordagens mais complexas de alianÃ§a estratÃ©gica e expansÃ£o internacional.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 bg-gray-50 font-semibold">
              Como a CONNECTA dÃ¡ suporte apÃ³s a identificaÃ§Ã£o de um potencial parceiro?
            </div>
            <div className="p-4">
              Nosso apoio vai muito alÃ©m da simples apresentaÃ§Ã£o. Oferecemos suporte completo em todas as etapas do desenvolvimento da parceria, incluindo preparaÃ§Ã£o para reuniÃµes iniciais, facilitaÃ§Ã£o de comunicaÃ§Ã£o (inclusive com traduÃ§Ã£o quando necessÃ¡rio), orientaÃ§Ã£o cultural para negociaÃ§Ãµes, assessoria na estruturaÃ§Ã£o de acordos, suporte jurÃ­dico atravÃ©s de parceiros especializados, e acompanhamento periÃ³dico apÃ³s o estabelecimento da parceria para garantir o sucesso da relaÃ§Ã£o comercial a longo prazo.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para expandir seu network global?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a CONNECTA pode ajudar sua empresa a encontrar os parceiros ideais para crescer internacionalmente.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6">
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
            "name": "CONNECTA",
            "provider": {
              "@type": "Organization",
              "name": "OLV Internacional",
              "url": "https://www.olvinternacional.com.br"
            },
            "description": "Plataforma de networking que conecta empresas brasileiras a parceiros globais para expandir seus negÃ³cios internacionalmente.",
            "serviceType": "Networking Internacional e Matchmaking Empresarial",
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

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Sobre | OLV Internacional',
  description: 'ConheÃ§a a histÃ³ria, missÃ£o, visÃ£o e valores da OLV Internacional.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/sobre'
  },
};

export default function Sobre() {
  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÃ‡ÃƒO HERO */}
        <section className="section hero">
          <div className="container">
            <div className="section-heading">
              <h1 className="hero-title">Sobre a OLV Internacional</h1>
              <p className="text-center max-w-4xl mx-auto text-base md:text-xl lg:text-2xl font-medium text-on-surface/90">
                Integramos EstratÃ©gia, OperaÃ§Ã£o e Resultado para empresas que desejam expandir seus negÃ³cios globalmente.
              </p>
            </div>
          </div>
        </section>

        {/* HISTÃ“RIA DA EMPRESA */}
        <section className="section bg-gray-800">
          <div className="pt-20 pb-12 px-6 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="card flex flex-col justify-center border border-accent/60 lg:col-span-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-on-surface dark:text-white">Nossa TrajetÃ³ria</h2>
                <p className="text-on-surface dark:text-white mb-4">
                  A OLV Internacional iniciou sua trajetÃ³ria como uma importadora e exportadora, operando diretamente em projetos estratÃ©gicos de comÃ©rcio exterior. Com o passar dos anos, participou de importantes iniciativas em grandes corporaÃ§Ãµes nacionais e multinacionais, acumulando um repertÃ³rio prÃ¡tico incomparÃ¡vel em operaÃ§Ãµes logÃ­sticas, tributÃ¡rias e de gestÃ£o internacional.
                </p>
                <p className="text-on-surface dark:text-white mb-4">
                  Ao longo dessa jornada, a OLV consolidou um valioso ecossistema de parceiros especializados â€” como transportadoras, agentes de carga (freight forwarders), despachantes aduaneiros, consultores independentes e prestadores de serviÃ§os de alto nÃ­vel no setor de supply chain. Essa base de relacionamento, construÃ­da com confianÃ§a e entregas concretas, deu origem ao que hoje Ã© o nÃºcleo consultivo estratÃ©gico da empresa.
                </p>
                <p className="text-on-surface dark:text-white">
                  Foi justamente essa vivÃªncia, aliada Ã  maturidade operacional conquistada ao longo de dÃ©cadas, que levou a OLV Internacional a dar um passo ousado: voltar sua atuaÃ§Ã£o ao fortalecimento das pequenas e mÃ©dias empresas (PMEs), oferecendo a elas o que atÃ© entÃ£o era acessÃ­vel apenas a grandes players.
                </p>
              </div>
              <div className="hidden lg:block rounded-lg shadow-lg bg-black/25 p-0 lg:col-span-4">
                <Image 
                  src="/images/olv-internacional-banner.webp" 
                  alt="HistÃ³ria da OLV Internacional" 
                  width={800}
                  height={450}
                  className="object-contain w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NOVA SEÃ‡ÃƒO: MODELO DE ATUAÃ‡ÃƒO */}
        <section className="section pt-20">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nosso Modelo de AtuaÃ§Ã£o</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <p className="mb-4">
                  A OLV passou a trabalhar com um modelo de consultoria por projeto, onde executivos experientes, especializados e independentes atuam diretamente nos desafios dos clientes â€” sem a necessidade de estruturas internas onerosas, vÃ­nculos empregatÃ­cios ou investimentos pesados em departamentos prÃ³prios.
                </p>
                <p className="font-semibold text-lg mb-4">
                  Ao invÃ©s de contratar pessoas, o cliente contrata resultados.
                </p>
                <p className="font-semibold text-lg">
                  Ao invÃ©s de montar estrutura, o cliente acessa inteligÃªncia, experiÃªncia e rede estratÃ©gica.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title mb-4">Nossa Proposta Ãšnica</h3>
                <p className="mb-4">
                  Ã‰ nesse novo momento que a OLV Internacional lanÃ§a ao mercado uma proposta Ãºnica: aliar conhecimento prÃ¡tico, vivÃªncia real e automaÃ§Ã£o tecnolÃ³gica por meio de um corpo consultivo de alto nÃ­vel, sustentado por um arsenal de plataformas digitais:
                </p>
                <ul className="card-list">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">STRATEVO</span> â€“ InteligÃªncia de mercado e dados pÃºblicos
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">EXCELTTA</span> â€“ Simuladores de importaÃ§Ã£o e viabilidade
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CONNECTA</span> â€“ ConexÃ£o com fornecedores globais
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV ENGAGE</span> â€“ QualificaÃ§Ã£o automatizada de leads
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CORE</span> â€“ Central de comando de todos os projetos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSÃƒO, VISÃƒO E VALORES */}
        <section className="section bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-on-surface dark:text-white">MissÃ£o, VisÃ£o e Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-gray-700">
                <h3 className="card-title text-on-surface dark:text-white">MissÃ£o</h3>
                <p className="text-on-surface dark:text-white">
                  Simplificar operaÃ§Ãµes complexas, acelerar negÃ³cios e integrar estratÃ©gias com 
                  resultados no comÃ©rcio exterior e logÃ­stica internacional, permitindo que PMEs operem com a seguranÃ§a, a inteligÃªncia e a forÃ§a estratÃ©gica que antes sÃ³ grandes empresas possuÃ­am.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-on-surface dark:text-white">VisÃ£o</h3>
                <p className="text-on-surface dark:text-white">
                  Ser reconhecida como a principal consultoria estratÃ©gica em comÃ©rcio exterior 
                  do Brasil, transformando a maneira como as empresas acessam mercados globais atravÃ©s da integraÃ§Ã£o de tecnologia, conhecimento prÃ¡tico e networking estratÃ©gico.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-on-surface dark:text-white">Valores</h3>
                <ul className="card-list text-on-surface dark:text-white">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    ExcelÃªncia operacional
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Integridade e transparÃªncia
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    InovaÃ§Ã£o contÃ­nua
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Foco em resultados mensurÃ¡veis
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Parceria estratÃ©gica
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section pt-20">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">Nosso Diferencial</h2>
              <p className="text-center max-w-3xl mx-auto mb-8">
                Com nosso portfÃ³lio integrado, a OLV Internacional transforma tecnologia em ponte, consultoria em soluÃ§Ã£o e networking em resultado mensurÃ¡vel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="flex items-center mb-3">
                  <Icon src="/icons/supplychain.svg" alt="Ãcone ExperiÃªncia" size="sm" className="mr-2 w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">ExperiÃªncia PrÃ¡tica</h3>
                </div>
                <p>
                  Nossa origem sÃ³lida como importadora/exportadora garante conhecimento real sobre os desafios e oportunidades do comÃ©rcio internacional.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center mb-3">
                  <Icon src="/icons/link.svg" alt="Ãcone Rede" size="sm" className="mr-2 w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Rede EstratÃ©gica</h3>
                </div>
                <p>
                  Um ecossistema de especialistas e parceiros globais como diferencial competitivo para resolver problemas complexos.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center mb-3">
                  <Icon src="/icons/tools.svg" alt="Ãcone Modelo FlexÃ­vel" size="sm" className="mr-2 w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Modelo FlexÃ­vel</h3>
                </div>
                <p>
                  Atuamos como um braÃ§o externo da sua empresa, sem passivos trabalhistas, com estrutura enxuta e impacto elevado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO RÃPIDO */}
        <section className="section contato">
          <div className="container contato-container">
            <div className="contato-card">
              <p className="contact-paragraph">
                Quer saber mais sobre como podemos ajudar sua empresa a expandir globalmente? Entre em contato conosco.
              </p>
              <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6">Fale Com um Especialista Agora</Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 

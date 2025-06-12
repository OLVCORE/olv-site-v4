import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Sobre | OLV Internacional',
  description: 'Conheça a história, missão, visão e valores da OLV Internacional.'
};

export default function Sobre() {
  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÇÃO HERO */}
        <section className="section hero">
          <div className="container">
            <div className="section-heading">
              <h1 className="hero-title">Sobre a OLV Internacional</h1>
              <p className="hero-description text-center max-w-3xl mx-auto">
                Integramos Estratégia, Operação e Resultado para empresas que desejam expandir seus negócios globalmente.
              </p>
            </div>
          </div>
        </section>

        {/* HISTÓRIA DA EMPRESA */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Nossa Trajetória</h2>
                <p className="text-gray-300 mb-4">
                  A OLV Internacional iniciou sua trajetória como uma importadora e exportadora, operando diretamente em projetos estratégicos de comércio exterior. Com o passar dos anos, participou de importantes iniciativas em grandes corporações nacionais e multinacionais, acumulando um repertório prático incomparável em operações logísticas, tributárias e de gestão internacional.
                </p>
                <p className="text-gray-300 mb-4">
                  Ao longo dessa jornada, a OLV consolidou um valioso ecossistema de parceiros especializados — como transportadoras, agentes de carga (freight forwarders), despachantes aduaneiros, consultores independentes e prestadores de serviços de alto nível no setor de supply chain. Essa base de relacionamento, construída com confiança e entregas concretas, deu origem ao que hoje é o núcleo consultivo estratégico da empresa.
                </p>
                <p className="text-gray-300">
                  Foi justamente essa vivência, aliada à maturidade operacional conquistada ao longo de décadas, que levou a OLV Internacional a dar um passo ousado: voltar sua atuação ao fortalecimento das pequenas e médias empresas (PMEs), oferecendo a elas o que até então era acessível apenas a grandes players.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/olv-internacional-banner.webp" 
                    alt="História da OLV Internacional" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOVA SEÇÃO: MODELO DE ATUAÇÃO */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nosso Modelo de Atuação</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="card">
                <p className="mb-4">
                  A OLV passou a trabalhar com um modelo de consultoria por projeto, onde executivos experientes, especializados e independentes atuam diretamente nos desafios dos clientes — sem a necessidade de estruturas internas onerosas, vínculos empregatícios ou investimentos pesados em departamentos próprios.
                </p>
                <p className="font-semibold text-lg mb-4">
                  Ao invés de contratar pessoas, o cliente contrata resultados.
                </p>
                <p className="font-semibold text-lg">
                  Ao invés de montar estrutura, o cliente acessa inteligência, experiência e rede estratégica.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title mb-4">Nossa Proposta Única</h3>
                <p className="mb-4">
                  É nesse novo momento que a OLV Internacional lança ao mercado uma proposta única: aliar conhecimento prático, vivência real e automação tecnológica por meio de um corpo consultivo de alto nível, sustentado por um arsenal de plataformas digitais:
                </p>
                <ul className="card-list">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">STRATEVO</span> – Inteligência de mercado e dados públicos
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">EXCELTTA</span> – Simuladores de importação e viabilidade
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CONNECTA</span> – Conexão com fornecedores globais
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV ENGAGE</span> – Qualificação automatizada de leads
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    <span className="font-semibold">OLV CORE</span> – Central de comando de todos os projetos
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MISSÃO, VISÃO E VALORES */}
        <section className="section bg-gray-800">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Missão, Visão e Valores</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Missão</h3>
                <p className="text-gray-300">
                  Simplificar operações complexas, acelerar negócios e integrar estratégias com 
                  resultados no comércio exterior e logística internacional, permitindo que PMEs operem com a segurança, a inteligência e a força estratégica que antes só grandes empresas possuíam.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Visão</h3>
                <p className="text-gray-300">
                  Ser reconhecida como a principal consultoria estratégica em comércio exterior 
                  do Brasil, transformando a maneira como as empresas acessam mercados globais através da integração de tecnologia, conhecimento prático e networking estratégico.
                </p>
              </div>
              <div className="card bg-gray-700">
                <h3 className="card-title text-white">Valores</h3>
                <ul className="card-list text-gray-300">
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Excelência operacional
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Integridade e transparência
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Inovação contínua
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Foco em resultados mensuráveis
                  </li>
                  <li>
                    <Image src="/icons/check.svg" alt="Checkmark" width={16} height={16} className="card-list-icon" /> 
                    Parceria estratégica
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Nosso Diferencial</h2>
              <p className="text-center max-w-3xl mx-auto mb-8">
                Com nosso portfólio integrado, a OLV Internacional transforma tecnologia em ponte, consultoria em solução e networking em resultado mensurável.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="card-title">Experiência Prática</h3>
                <p>
                  Nossa origem sólida como importadora/exportadora garante conhecimento real sobre os desafios e oportunidades do comércio internacional.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Rede Estratégica</h3>
                <p>
                  Um ecossistema de especialistas e parceiros globais como diferencial competitivo para resolver problemas complexos.
                </p>
              </div>
              <div className="card">
                <h3 className="card-title">Modelo Flexível</h3>
                <p>
                  Atuamos como um braço externo da sua empresa, sem passivos trabalhistas, com estrutura enxuta e impacto elevado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO RÁPIDO */}
        <section className="section contato">
          <div className="container contato-container">
            <div className="contato-card">
              <p className="contact-paragraph">
                Quer saber mais sobre como podemos ajudar sua empresa a expandir globalmente? Entre em contato conosco.
              </p>
              <Link href="/contato" className="cta-button-alt">Fale Com um Especialista Agora</Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 
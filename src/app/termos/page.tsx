import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Termos de Uso | OLV Internacional',
  description: 'Termos de Uso da OLV Internacional: regras, direitos e responsabilidades para utilizaÃ§Ã£o de nossos serviÃ§os, site e plataformas de comÃ©rcio exterior, supply chain e consultoria em importaÃ§Ã£o/exportaÃ§Ã£o.',
  };

export default function TermosPage() {
  return (
    <MainLayout>
      <div className="main-content">
        {/* HERO DA PÃGINA TERMOS */}
        <section className="section hero">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Termos de Uso</h1>
                <p className="text-gray-300 text-lg">
                  Bem-vindo aos Termos de Uso da OLV Internacional. Este documento estabelece as regras,
                  direitos e responsabilidades para utilizaÃ§Ã£o de nossos serviÃ§os, site e plataformas.
                  Por favor, leia atentamente antes de acessar ou utilizar nossos serviÃ§os.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-64 md:h-80 w-full">
                  <Image 
                    src="/images/olv-policy-banner.webp" 
                    alt="Termos de Uso â€“ OLV Internacional" 
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÃ‡ÃƒO CONTEÃšDO DOS TERMOS */}
        <section className="section" id="termos-content">
          <div className="container mx-auto px-4 py-8">
            {/* 1. AceitaÃ§Ã£o dos Termos */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">1. AceitaÃ§Ã£o dos Termos</h2>
              <p className="text-gray-300 mb-4">
                Ao acessar ou utilizar o site da OLV Internacional (www.olvinternacional.com.br), bem como qualquer outro 
                site, aplicativo, software, ferramenta, plataforma ou conteÃºdo relacionado (coletivamente, os "ServiÃ§os"), 
                vocÃª concorda com estes Termos de Uso.
              </p>
              <p className="text-gray-300 mb-4">
                Estes termos constituem um acordo legal entre vocÃª e a OLV Internacional, inscrita no CNPJ sob o nÂº 67.867.580/0001-90, 
                com sede na Av. Paulista, 1471 - Conj 1110, Bela Vista, SÃ£o Paulo - SP, CEP 01311-927, Brasil.
              </p>
              <p className="text-gray-300">
                Se vocÃª nÃ£o concordar com estes termos, nÃ£o utilize nossos ServiÃ§os. Reservamo-nos o direito de modificar estes 
                termos a qualquer momento, e tais modificaÃ§Ãµes terÃ£o efeito imediato apÃ³s a publicaÃ§Ã£o no site.
              </p>
            </article>

            {/* 2. ServiÃ§os */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. ServiÃ§os</h2>
              <p className="text-gray-300 mb-4">
                A OLV Internacional oferece serviÃ§os especializados em consultoria de comÃ©rcio exterior, importaÃ§Ã£o, exportaÃ§Ã£o, 
                logÃ­stica internacional, compliance aduaneiro, desenvolvimento de estratÃ©gias de internacionalizaÃ§Ã£o e treinamentos 
                corporativos.
              </p>
              <p className="text-gray-300 mb-4">
                Os ServiÃ§os podem incluir conteÃºdo informativo, ferramentas de simulaÃ§Ã£o, plataformas digitais, assessoria 
                personalizada e outros recursos relacionados ao comÃ©rcio internacional.
              </p>
              <p className="text-gray-300">
                A OLV Internacional se reserva o direito de alterar, suspender ou descontinuar qualquer aspecto dos ServiÃ§os 
                a qualquer momento, incluindo a disponibilidade de qualquer recurso, banco de dados ou conteÃºdo.
              </p>
            </article>

            {/* 3. Uso dos ServiÃ§os */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">3. Uso dos ServiÃ§os</h2>
              <p className="text-gray-300 mb-4">Ao utilizar nossos ServiÃ§os, vocÃª concorda em:</p>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>Fornecer informaÃ§Ãµes precisas, completas e atualizadas;</li>
                <li>Utilizar os ServiÃ§os apenas para finalidades legais e de acordo com estes Termos;</li>
                <li>NÃ£o utilizar os ServiÃ§os para fins fraudulentos ou ilÃ­citos;</li>
                <li>NÃ£o interferir ou interromper a integridade ou o desempenho dos ServiÃ§os;</li>
                <li>NÃ£o tentar obter acesso nÃ£o autorizado aos ServiÃ§os, sistemas ou redes;</li>
                <li>NÃ£o reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos ServiÃ§os sem autorizaÃ§Ã£o expressa;</li>
                <li>NÃ£o transmitir vÃ­rus, malware ou outros cÃ³digos de natureza destrutiva;</li>
                <li>Respeitar todos os direitos de propriedade intelectual relacionados aos ServiÃ§os.</li>
              </ul>
            </article>

            {/* 4. Propriedade Intelectual */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">4. Propriedade Intelectual</h2>
              <p className="text-gray-300 mb-4">
                Todo o conteÃºdo disponÃ­vel nos ServiÃ§os, incluindo, mas nÃ£o se limitando a textos, grÃ¡ficos, logotipos, 
                Ã­cones, imagens, clipes de Ã¡udio, downloads digitais, compilaÃ§Ãµes de dados e software, Ã© de propriedade 
                da OLV Internacional ou de seus fornecedores e parceiros, e estÃ¡ protegido pelas leis brasileiras e 
                internacionais de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              <p className="text-gray-300 mb-4">
                A reproduÃ§Ã£o, distribuiÃ§Ã£o, modificaÃ§Ã£o, exibiÃ§Ã£o pÃºblica, execuÃ§Ã£o pÃºblica ou qualquer outro uso do 
                conteÃºdo dos ServiÃ§os para fins comerciais sem autorizaÃ§Ã£o prÃ©via por escrito da OLV Internacional Ã© 
                estritamente proibida.
              </p>
              <p className="text-gray-300">
                As marcas comerciais, marcas de serviÃ§o e logotipos utilizados e exibidos nos ServiÃ§os sÃ£o marcas 
                registradas ou nÃ£o registradas da OLV Internacional e de terceiros. Nada contido nos ServiÃ§os deve 
                ser interpretado como concessÃ£o, por implicaÃ§Ã£o, preclusÃ£o ou de outra forma, de qualquer licenÃ§a 
                ou direito de usar qualquer marca exibida nos ServiÃ§os sem a permissÃ£o por escrito da OLV Internacional 
                ou do terceiro proprietÃ¡rio.
              </p>
            </article>

            {/* 5. LimitaÃ§Ã£o de Responsabilidade */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. LimitaÃ§Ã£o de Responsabilidade</h2>
              <p className="text-gray-300 mb-4">
                Os ServiÃ§os sÃ£o fornecidos "como estÃ£o" e "conforme disponÃ­veis", sem garantias de qualquer tipo, 
                expressas ou implÃ­citas. A OLV Internacional nÃ£o garante que os ServiÃ§os serÃ£o ininterruptos, oportunos, 
                seguros ou livres de erros.
              </p>
              <p className="text-gray-300 mb-4">
                Em nenhuma circunstÃ¢ncia a OLV Internacional serÃ¡ responsÃ¡vel por quaisquer danos diretos, indiretos, 
                incidentais, especiais, exemplares ou consequenciais (incluindo, mas nÃ£o se limitando a, perda de lucros, 
                receitas, dados, uso de bens ou outros bens intangÃ­veis) resultantes do uso ou incapacidade de uso dos ServiÃ§os.
              </p>
              <p className="text-gray-300">
                As informaÃ§Ãµes disponibilizadas nos ServiÃ§os tÃªm carÃ¡ter informativo e nÃ£o constituem aconselhamento 
                jurÃ­dico, tributÃ¡rio ou regulatÃ³rio. As decisÃµes tomadas com base nas informaÃ§Ãµes disponibilizadas 
                sÃ£o de responsabilidade exclusiva do usuÃ¡rio.
              </p>
            </article>

            {/* 6. Links para Sites de Terceiros */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">6. Links para Sites de Terceiros</h2>
              <p className="text-gray-300 mb-4">
                Os ServiÃ§os podem conter links para sites de terceiros que nÃ£o sÃ£o de propriedade ou controlados pela 
                OLV Internacional. A OLV Internacional nÃ£o tem controle e nÃ£o assume nenhuma responsabilidade pelo 
                conteÃºdo, polÃ­ticas de privacidade ou prÃ¡ticas de sites de terceiros.
              </p>
              <p className="text-gray-300">
                VocÃª reconhece e concorda que a OLV Internacional nÃ£o serÃ¡ responsÃ¡vel, direta ou indiretamente, por 
                qualquer dano ou perda causada ou alegadamente causada por ou em conexÃ£o com o uso ou confianÃ§a em 
                qualquer conteÃºdo, bens ou serviÃ§os disponÃ­veis em ou atravÃ©s de tais sites.
              </p>
            </article>

            {/* 7. Lei AplicÃ¡vel e JurisdiÃ§Ã£o */}
            <article className="bg-gray-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">7. Lei AplicÃ¡vel e JurisdiÃ§Ã£o</h2>
              <p className="text-gray-300 mb-4">
                Estes Termos serÃ£o regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa decorrente 
                ou relacionada a estes Termos serÃ¡ submetida Ã  jurisdiÃ§Ã£o exclusiva dos tribunais da Comarca de SÃ£o Paulo, SP.
              </p>
            </article>

            {/* CTA para contato */}
            <div className="bg-primary text-on-primary p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">DÃºvidas sobre nossos termos?</h2>
              <p className="text-white mb-6">
                Se vocÃª tiver qualquer dÃºvida sobre nossos Termos de Uso ou precisar de esclarecimentos adicionais, 
                nossa equipe estÃ¡ pronta para ajudar.
              </p>
              <Link
                href="/contato"
                className="btn btn-primary font-bold py-3 px-8"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
} 

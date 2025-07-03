import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'VENTURES - OLV Internacional | Investimentos EstratÃ©gicos em ComÃ©rcio Internacional',
  description: 'VENTURES Ã© a plataforma de investimentos da OLV Internacional, conectando empresas inovadoras do comÃ©rcio exterior com capital estratÃ©gico para acelerar seu crescimento global.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/ventures'
  },
};

export default function VenturesPage() {
  return (
    <PlatformLayout
      platformName="VENTURES"
      platformLogo="/images/ventures-logo.jpeg"
      platformDescription="Investimentos EstratÃ©gicos em ComÃ©rcio Internacional"
      platformColor="#0a2463"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-accent">Sobre a VENTURES</h2>
        <p className="mb-4">
          A VENTURES Ã© a plataforma de investimentos da OLV Internacional, dedicada a conectar empresas inovadoras do ecossistema de comÃ©rcio exterior com capital estratÃ©gico para acelerar seu crescimento e expansÃ£o global.
        </p>
        <p className="mb-4">
          Com profundo conhecimento do mercado internacional e uma rede global de parceiros, identificamos oportunidades de alto potencial e fornecemos nÃ£o apenas capital, mas tambÃ©m expertise, mentoria e acesso a mercados para impulsionar negÃ³cios transformadores.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Capital EstratÃ©gico</h3>
            <p>Investimentos direcionados em empresas com potencial de transformar o comÃ©rcio internacional.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">AceleraÃ§Ã£o de NegÃ³cios</h3>
            <p>Programa intensivo de desenvolvimento para potencializar empresas com soluÃ§Ãµes inovadoras para o mercado global.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">ConexÃµes Globais</h3>
            <p>Acesso a uma rede internacional de parceiros, clientes e investidores para impulsionar a expansÃ£o.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Ãreas de Investimento VENTURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Tecnologia para ComÃ©rcio Internacional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Plataformas de comÃ©rcio digital B2B</li>
              <li>SoluÃ§Ãµes de automaÃ§Ã£o para processos de exportaÃ§Ã£o e importaÃ§Ã£o</li>
              <li>Ferramentas de compliance internacional</li>
              <li>Sistemas de gestÃ£o para operaÃ§Ãµes globais</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">LogÃ­stica e Supply Chain</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>SoluÃ§Ãµes inovadoras para logÃ­stica internacional</li>
              <li>Plataformas de gestÃ£o de cadeias de suprimentos globais</li>
              <li>Tecnologias para rastreabilidade e transparÃªncia</li>
              <li>Modelos disruptivos de distribuiÃ§Ã£o internacional</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">Fintech Internacional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Plataformas de pagamentos cross-border</li>
              <li>SoluÃ§Ãµes de financiamento para comÃ©rcio exterior</li>
              <li>Sistemas de gestÃ£o de risco cambial</li>
              <li>Tecnologias para compliance financeiro internacional</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-accent">NegÃ³cios SustentÃ¡veis Globais</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Empresas com produtos e serviÃ§os de impacto positivo</li>
              <li>SoluÃ§Ãµes para cadeias de suprimentos sustentÃ¡veis</li>
              <li>Tecnologias para economia circular em escala global</li>
              <li>NegÃ³cios com foco em mercados emergentes sustentÃ¡veis</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Programas VENTURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Seed Capital</h3>
            <p>Investimentos iniciais entre R$ 500 mil e R$ 2 milhÃµes para startups com soluÃ§Ãµes inovadoras e potencial de escala global.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Growth Capital</h3>
            <p>Investimentos de R$ 2 a 10 milhÃµes para empresas em fase de expansÃ£o internacional, com modelo de negÃ³cio validado.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Global Expansion Fund</h3>
            <p>Fundo dedicado a empresas brasileiras com produtos e serviÃ§os comprovados que buscam capital para internacionalizaÃ§Ã£o.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">VENTURES Accelerator</h3>
            <p>Programa de aceleraÃ§Ã£o de 6 meses para startups em estÃ¡gio inicial, com mentoria, conexÃµes internacionais e capital semente.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Corporate Ventures</h3>
            <p>Parcerias com corporaÃ§Ãµes para investimentos estratÃ©gicos em inovaÃ§Ãµes que complementam suas operaÃ§Ãµes globais.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-accent">Impact Investment</h3>
            <p>Linha de investimento para negÃ³cios que combinam retorno financeiro com impacto positivo mensurÃ¡vel em mercados globais.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">BenefÃ­cios VENTURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Para Empresas</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Capital EstratÃ©gico:</span> Acesso a investimentos alinhados com as necessidades especÃ­ficas do seu negÃ³cio global.</li>
              <li><span className="font-semibold">Expertise Especializada:</span> Mentoria de especialistas com experiÃªncia profunda em comÃ©rcio internacional.</li>
              <li><span className="font-semibold">Acesso a Mercados:</span> ConexÃµes com parceiros, clientes e distribuidores em mercados-chave globais.</li>
              <li><span className="font-semibold">Sinergia com Ecossistema:</span> IntegraÃ§Ã£o com outras plataformas e soluÃ§Ãµes do ecossistema OLV Internacional.</li>
              <li><span className="font-semibold">Credibilidade Internacional:</span> AssociaÃ§Ã£o com uma marca reconhecida no mercado global.</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">Para Investidores</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Deal Flow Qualificado:</span> Acesso a oportunidades de investimento cuidadosamente selecionadas no setor de comÃ©rcio internacional.</li>
              <li><span className="font-semibold">Due Diligence Especializada:</span> AnÃ¡lises aprofundadas por especialistas que entendem as nuances dos negÃ³cios globais.</li>
              <li><span className="font-semibold">PortfÃ³lio Diversificado:</span> ExposiÃ§Ã£o a diferentes segmentos e geografias do comÃ©rcio internacional.</li>
              <li><span className="font-semibold">Coinvestimento:</span> Oportunidades de participar de rodadas junto com investidores estratÃ©gicos globais.</li>
              <li><span className="font-semibold">Impacto EconÃ´mico:</span> ContribuiÃ§Ã£o para o desenvolvimento do ecossistema de comÃ©rcio exterior brasileiro.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">Casos de Sucesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">LogTech Brasil</h3>
            <p className="mb-4">Plataforma de otimizaÃ§Ã£o logÃ­stica para exportadores que recebeu investimento seed de R$ 1,5 milhÃ£o da VENTURES. Em 18 meses, expandiu para 5 paÃ­ses da AmÃ©rica Latina, aumentou seu faturamento em 8x e levantou uma rodada Series A de R$ 15 milhÃµes com investidores internacionais.</p>
            <p className="italic text-gray-600">"O diferencial do investimento da VENTURES foi o conhecimento profundo do mercado internacional e as conexÃµes que nos abriram portas impossÃ­veis de acessar de outra forma." - Maria Santos, CEO</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-3 text-accent">TradeFinance AI</h3>
            <p className="mb-4">Fintech especializada em financiamento para comÃ©rcio exterior utilizando inteligÃªncia artificial para anÃ¡lise de risco. ApÃ³s participar do programa de aceleraÃ§Ã£o e receber investimento de R$ 3 milhÃµes, processou mais de R$ 200 milhÃµes em operaÃ§Ãµes de financiamento em seu primeiro ano completo de operaÃ§Ã£o.</p>
            <p className="italic text-gray-600">"A mentoria intensiva durante o programa de aceleraÃ§Ã£o nos ajudou a refinar nosso modelo de negÃ³cios e a estratÃ©gia de entrada em mercados globais, acelerando nosso crescimento." - Ricardo Oliveira, Fundador</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-accent">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Qual Ã© o processo de seleÃ§Ã£o para receber investimento da VENTURES?
            </div>
            <div className="p-4">
              Nosso processo de seleÃ§Ã£o Ã© estruturado em cinco etapas, concebido para ser rigoroso mas tambÃ©m Ã¡gil para os empreendedores. Inicialmente, avaliamos todas as inscriÃ§Ãµes atravÃ©s de nossa plataforma online, onde analisamos a adequaÃ§Ã£o do negÃ³cio Ã s nossas teses de investimento e ao estÃ¡gio de desenvolvimento apropriado. As empresas selecionadas passam para a fase de anÃ¡lise preliminar, onde realizamos reuniÃµes iniciais com os fundadores para compreender melhor o modelo de negÃ³cio, a equipe e o potencial de mercado global. Na terceira etapa, conduzimos uma due diligence aprofundada, incluindo anÃ¡lise de tecnologia, mercado, financeira e jurÃ­dica, alÃ©m de entrevistas com clientes e parceiros. As empresas que avanÃ§am sÃ£o apresentadas ao comitÃª de investimentos, composto por especialistas em comÃ©rcio internacional e venture capital. Por fim, apÃ³s a aprovaÃ§Ã£o do comitÃª, apresentamos a proposta de investimento e iniciamos o processo de estruturaÃ§Ã£o da operaÃ§Ã£o. O processo completo dura tipicamente entre 6 e 12 semanas, dependendo da complexidade do negÃ³cio e do estÃ¡gio de maturidade da empresa.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Que tipo de apoio, alÃ©m do capital, a VENTURES oferece Ã s empresas investidas?
            </div>
            <div className="p-4">
              AlÃ©m do aporte financeiro, oferecemos um ecossistema completo de suporte para potencializar o crescimento internacional das empresas investidas. Isso inclui mentoria personalizada com especialistas setoriais que jÃ¡ construÃ­ram e escalaram negÃ³cios globalmente; acesso Ã  nossa rede de mais de 200 parceiros comerciais em 35 paÃ­ses, facilitando a entrada em novos mercados; suporte de equipes especializadas em Ã¡reas crÃ­ticas como desenvolvimento de produto, estratÃ©gia go-to-market internacional, compliance regulatÃ³rio global e estruturaÃ§Ã£o de operaÃ§Ãµes internacionais; oportunidades de exposiÃ§Ã£o em eventos e mÃ­dia especializados; conexÃ£o com potenciais clientes corporativos atravÃ©s de nosso programa de corporate venture; integraÃ§Ã£o com as demais plataformas do ecossistema OLV que podem complementar suas operaÃ§Ãµes; e acesso facilitado a rodadas subsequentes de investimento atravÃ©s de nossa rede de investidores e fundos parceiros. Nossa abordagem hands-on significa que trabalhamos lado a lado com os fundadores para superar os desafios especÃ­ficos da expansÃ£o internacional.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Como a VENTURES avalia o potencial de internacionalizaÃ§Ã£o de uma empresa?
            </div>
            <div className="p-4">
              Nossa metodologia proprietÃ¡ria de avaliaÃ§Ã£o do potencial de internacionalizaÃ§Ã£o considera cinco dimensÃµes crÃ­ticas. Primeiro, analisamos a escalabilidade do produto ou serviÃ§o em diferentes mercados, avaliando o grau de localizaÃ§Ã£o necessÃ¡rio, a existÃªncia de barreiras tÃ©cnicas e a viabilidade de adaptaÃ§Ã£o a diferentes contextos. Segundo, examinamos a proposta de valor diferenciada e sua relevÃ¢ncia em mercados internacionais especÃ­ficos, comparando com soluÃ§Ãµes locais existentes. Terceiro, avaliamos a capacidade da equipe, considerando experiÃªncia prÃ©via internacional, conhecimento de idiomas, adaptabilidade cultural e redes globais existentes. Quarto, analisamos o modelo de negÃ³cio e sua adequaÃ§Ã£o para operaÃ§Ã£o global, incluindo estruturas de precificaÃ§Ã£o, canais de distribuiÃ§Ã£o e exigÃªncias de capital. Por fim, estudamos o timing de mercado e oportunidades geopolÃ­ticas especÃ­ficas que possam criar janelas favorÃ¡veis para entrada em determinados paÃ­ses. Cada dimensÃ£o recebe uma pontuaÃ§Ã£o em nossa matriz de avaliaÃ§Ã£o, gerando um Ã­ndice de potencial de internacionalizaÃ§Ã£o que direciona nossa decisÃ£o de investimento e a estratÃ©gia de suporte pÃ³s-investimento.
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg">
            <div className="p-4 bg-gray-50 font-semibold">
              Quais sÃ£o os critÃ©rios para participar do programa de aceleraÃ§Ã£o da VENTURES?
            </div>
            <div className="p-4">
              O programa de aceleraÃ§Ã£o VENTURES foi desenhado para startups em estÃ¡gio inicial com soluÃ§Ãµes inovadoras para o comÃ©rcio internacional, e consideramos cinco critÃ©rios principais para seleÃ§Ã£o. Primeiro, buscamos startups com um produto mÃ­nimo viÃ¡vel (MVP) jÃ¡ desenvolvido e alguma validaÃ§Ã£o inicial de mercado, mesmo que em escala limitada. Segundo, a soluÃ§Ã£o deve endereÃ§ar um problema relevante e especÃ­fico dentro do ecossistema de comÃ©rcio exterior, com potencial de escala internacional. Terceiro, avaliamos o diferencial competitivo da tecnologia ou abordagem, priorizando inovaÃ§Ãµes que representem avanÃ§os significativos sobre as soluÃ§Ãµes existentes. Quarto, analisamos a complementaridade com o ecossistema OLV e possÃ­veis sinergias com nossas outras plataformas e empresas investidas. Por fim, e talvez mais importante, avaliamos a qualidade, experiÃªncia e compromisso da equipe fundadora, sua capacidade de execuÃ§Ã£o e adaptaÃ§Ã£o. O programa ocorre duas vezes por ano, com duraÃ§Ã£o de seis meses, e inclui investimento de atÃ© R$ 500 mil em cada startup selecionada, alÃ©m do programa de mentoria intensiva e acesso ao nosso ecossistema global.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para impulsionar seu negÃ³cio internacional?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a VENTURES pode ajudar sua empresa a crescer globalmente com capital estratÃ©gico e apoio especializado.</p>
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
            "@type": "InvestmentOrFinancialService",
            "name": "VENTURES - OLV Internacional",
            "description": "Plataforma de investimentos estratÃ©gicos para empresas inovadoras do ecossistema de comÃ©rcio internacional.",
            "url": "https://www.olvinternacional.com.br/ventures",
            "serviceType": "Investimento em ComÃ©rcio Internacional",
            "areaServed": {
              "@type": "Country",
              "name": "Brasil"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.olvinternacional.com.br/ventures",
              "servicePhone": "+55 11 0000-0000"
            }
          })
        }}
      />
    </PlatformLayout>
  );
} 

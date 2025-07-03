import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Icon from '../../components/icons/Icon';

const PlatformLayout = dynamic(() => import('../../components/platforms/PlatformLayout'));

export const metadata = {
  title: 'ACADEMY - OLV Internacional | CapacitaÃ§Ã£o em ComÃ©rcio Internacional',
  description: 'ACADEMY Ã© a plataforma educacional da OLV Internacional, oferecendo treinamentos e capacitaÃ§Ã£o em comÃ©rcio exterior, operaÃ§Ãµes internacionais e desenvolvimento de competÃªncias globais.',
    alternates: {
    canonical: 'https://olvinternacional.com.br/academy'
  },
};

export default function AcademyPage() {
  return (
    <PlatformLayout
      platformName="ACADEMY"
      platformLogo="/images/academy.jpeg"
      platformDescription="CapacitaÃ§Ã£o e Desenvolvimento em ComÃ©rcio Internacional"
      platformIntro="A ACADEMY Ã© a plataforma educacional da OLV Internacional, direcionada ao desenvolvimento de competÃªncias e Ã  capacitaÃ§Ã£o de profissionais para o sucesso no comÃ©rcio internacional."
      platformColor="#2C3C8B"
    >
      <section className="mb-12">
        <h2 className="section-title">Sobre a ACADEMY</h2>
        <p className="mb-4">
          A ACADEMY Ã© a plataforma educacional da OLV Internacional, dedicada Ã  formaÃ§Ã£o e capacitaÃ§Ã£o de profissionais e empresas que atuam ou desejam atuar no comÃ©rcio internacional.
        </p>
        <p className="mb-4">
          Nossa missÃ£o Ã© desenvolver competÃªncias tÃ©cnicas e estratÃ©gicas essenciais para o sucesso em operaÃ§Ãµes globais, combinando conhecimento prÃ¡tico, metodologias inovadoras e experiÃªncias de aprendizado transformadoras.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/academy.svg" alt="Education Icon" className="mr-2" />
              <h3 className="text-xl">FormaÃ§Ã£o Especializada</h3>
            </div>
            <p>Programas de capacitaÃ§Ã£o focados nas competÃªncias essenciais para operaÃ§Ãµes de comÃ©rcio exterior.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/training.svg" alt="Learning Icon" className="mr-2" />
              <h3 className="text-xl">Aprendizagem PrÃ¡tica</h3>
            </div>
            <p>Metodologia que combina conhecimentos teÃ³ricos com aplicaÃ§Ã£o prÃ¡tica em casos reais de negÃ³cios internacionais.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chart.svg" alt="Development Icon" className="mr-2" />
              <h3 className="text-xl">Desenvolvimento ContÃ­nuo</h3>
            </div>
            <p>Acompanhamento e suporte permanente para a evoluÃ§Ã£o constante das competÃªncias globais da sua equipe.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Programas ACADEMY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/qualification.svg" alt="Executive Education Icon" className="mr-2" />
              <h3 className="text-xl">FormaÃ§Ã£o Executiva</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>MBA em GestÃ£o do ComÃ©rcio Internacional</li>
              <li>EspecializaÃ§Ã£o em EstratÃ©gia Global</li>
              <li>Programa para LÃ­deres de ExpansÃ£o Internacional</li>
              <li>CertificaÃ§Ã£o em Global Trade Management</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/tools.svg" alt="Technical Training Icon" className="mr-2" />
              <h3 className="text-xl">Treinamentos TÃ©cnicos</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>OperaÃ§Ãµes de ImportaÃ§Ã£o e ExportaÃ§Ã£o</li>
              <li>Compliance em ComÃ©rcio Internacional</li>
              <li>LogÃ­stica e Supply Chain Global</li>
              <li>TributaÃ§Ã£o no ComÃ©rcio Exterior</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/collaboration.svg" alt="Skills Development Icon" className="mr-2" />
              <h3 className="text-xl">Desenvolvimento de CompetÃªncias</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>NegociaÃ§Ã£o Internacional</li>
              <li>ComunicaÃ§Ã£o Intercultural</li>
              <li>InteligÃªncia Competitiva Global</li>
              <li>LideranÃ§a em Equipes Multiculturais</li>
            </ul>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/specialist.svg" alt="Custom Programs Icon" className="mr-2" />
              <h3 className="text-xl">Programas Customizados</h3>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-company Training</li>
              <li>Workshops para desafios especÃ­ficos</li>
              <li>Mentoria para equipes de comÃ©rcio exterior</li>
              <li>AceleraÃ§Ã£o de competÃªncias internacionais</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">BenefÃ­cios ACADEMY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/specialist.svg" alt="Expertise Icon" className="mr-2" />
              <h3 className="text-lg">Expertise PrÃ¡tica</h3>
            </div>
            <p>Aprendizado com especialistas que atuam diariamente no mercado internacional, combinando teoria e aplicaÃ§Ã£o real.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/check.svg" alt="Methodology Icon" className="mr-2" />
              <h3 className="text-lg">Metodologia Eficaz</h3>
            </div>
            <p>Abordagem de aprendizado que promove resultados imediatos e aplicÃ¡veis Ã s operaÃ§Ãµes de comÃ©rcio exterior da sua empresa.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/newspaper.svg" alt="Content Icon" className="mr-2" />
              <h3 className="text-lg">ConteÃºdo Atualizado</h3>
            </div>
            <p>Programas constantemente atualizados com as Ãºltimas tendÃªncias, regulamentaÃ§Ãµes e melhores prÃ¡ticas do comÃ©rcio internacional.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/connecta.svg" alt="Networking Icon" className="mr-2" />
              <h3 className="text-lg">Networking Qualificado</h3>
            </div>
            <p>Oportunidades de conexÃ£o com outros profissionais e empresas que atuam no comÃ©rcio internacional.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/compliance.svg" alt="Certification Icon" className="mr-2" />
              <h3 className="text-lg">CertificaÃ§Ãµes Reconhecidas</h3>
            </div>
            <p>Certificados valorizados pelo mercado que comprovam a qualificaÃ§Ã£o dos profissionais em comÃ©rcio exterior.</p>
          </div>
          <div className="platform-card">
            <div className="flex items-center mb-3">
              <Icon src="/icons/chat.svg" alt="Support Icon" className="mr-2" />
              <h3 className="text-lg">Suporte ContÃ­nuo</h3>
            </div>
            <p>Acesso a materiais, recursos e consultoria para aplicaÃ§Ã£o dos conhecimentos adquiridos.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="platform-card">
            <p className="italic mb-4">&ldquo;O programa de capacitaÃ§Ã£o da ACADEMY transformou nossa equipe de comÃ©rcio exterior. O conhecimento prÃ¡tico e as ferramentas fornecidas nos permitiram expandir nossas operaÃ§Ãµes para novos mercados com muito mais seguranÃ§a e eficiÃªncia.&rdquo;</p>
            <p className="font-semibold">Roberto Almeida</p>
            <p className="text-sm text-gray-600">Diretor de OperaÃ§Ãµes Internacionais, IndÃºstria de Alimentos</p>
          </div>
          <div className="platform-card">
            <p className="italic mb-4">&ldquo;A especializaÃ§Ã£o em negociaÃ§Ã£o internacional da ACADEMY foi fundamental para melhorar nossos resultados em contratos globais. A metodologia focada em casos prÃ¡ticos fez toda a diferenÃ§a para aplicaÃ§Ã£o imediata dos conhecimentos.&rdquo;</p>
            <p className="font-semibold">Carolina Santos</p>
            <p className="text-sm text-gray-600">Gerente de ExportaÃ§Ã£o, Empresa de Manufatura</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">FAQ - Perguntas Frequentes</h2>
        <div className="space-y-4">
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Quais sÃ£o os diferenciais dos programas da ACADEMY em relaÃ§Ã£o a outros cursos de comÃ©rcio exterior?
            </div>
            <div className="p-4">
              Os programas da ACADEMY se destacam por trÃªs diferenciais principais: Primeiro, nossa abordagem prÃ¡tica, onde todos os conhecimentos sÃ£o apresentados com aplicaÃ§Ãµes reais e estudos de caso baseados em operaÃ§Ãµes concretas. Segundo, nosso corpo docente Ã© composto exclusivamente por profissionais que atuam ativamente no mercado internacional, trazendo experiÃªncias recentes e relevantes. Terceiro, oferecemos um ecossistema completo de aprendizado, com acesso a ferramentas, templates, networking qualificado e suporte pÃ³s-programa para implementaÃ§Ã£o dos conhecimentos. AlÃ©m disso, nossos programas sÃ£o customizÃ¡veis para atender os desafios especÃ­ficos de cada organizaÃ§Ã£o, diferentemente de cursos padronizados disponÃ­veis no mercado.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Como a ACADEMY pode ajudar minha empresa a desenvolver competÃªncias para expansÃ£o internacional?
            </div>
            <div className="p-4">
              A ACADEMY oferece uma abordagem estruturada para desenvolver as competÃªncias necessÃ¡rias para expansÃ£o internacional, comeÃ§ando com um diagnÃ³stico detalhado das capacidades atuais da sua empresa e dos gaps existentes para atuar com sucesso nos mercados-alvo. Com base nesse diagnÃ³stico, desenhamos um programa de desenvolvimento personalizado que pode incluir treinamentos tÃ©cnicos especÃ­ficos (como operaÃ§Ãµes aduaneiras, tributaÃ§Ã£o internacional, logÃ­stica global), desenvolvimento de competÃªncias estratÃ©gicas (inteligÃªncia de mercado, estruturaÃ§Ã£o de canais internacionais) e habilidades interculturais essenciais. Implementamos este programa atravÃ©s de mÃºltiplas metodologias, como workshops, mentorias individuais, projetos aplicados e imersÃµes, garantindo que o conhecimento seja absorvido e aplicado. Complementamos com ferramentas prÃ¡ticas, templates e frameworks que aceleram a implementaÃ§Ã£o, alÃ©m de suporte contÃ­nuo durante o processo de expansÃ£o internacional.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Quais modalidades de treinamento sÃ£o oferecidas pela ACADEMY?
            </div>
            <div className="p-4">
              A ACADEMY oferece mÃºltiplas modalidades de treinamento adaptÃ¡veis Ã s necessidades de cada cliente. Nossos programas podem ser realizados presencialmente, com imersÃµes e workshops intensivos na sua empresa ou em nossos centros de treinamento. Oferecemos tambÃ©m formatos hÃ­bridos, combinando encontros presenciais com mÃ³dulos online assÃ­ncronos para otimizar o tempo dos participantes. Para empresas com equipes distribuÃ­das geograficamente, disponibilizamos programas totalmente online com sessÃµes ao vivo interativas e conteÃºdos on-demand de alta qualidade. AlÃ©m disso, temos formatos de aprendizagem contÃ­nua com microlearning, onde os participantes recebem pequenas doses de conhecimento aplicÃ¡vel ao longo do tempo. Para desafios especÃ­ficos, oferecemos tambÃ©m a modalidade de aprendizagem baseada em projetos, onde o treinamento acontece durante a resoluÃ§Ã£o de um desafio real da sua operaÃ§Ã£o internacional.
            </div>
          </div>
          <div className="platform-card">
            <div className="p-4 font-semibold flex items-center">
              <Icon src="/icons/faq.svg" alt="FAQ Icon" size="sm" className="mr-2" />
              Como mensurar o retorno sobre investimento dos programas de capacitaÃ§Ã£o da ACADEMY?
            </div>
            <div className="p-4">
              Na ACADEMY, desenvolvemos uma metodologia robusta para mensurar o ROI dos nossos programas de capacitaÃ§Ã£o. O processo comeÃ§a na fase de design do programa, onde estabelecemos junto ao cliente indicadores claros de sucesso alinhados aos objetivos de negÃ³cio. Durante o programa, implementamos avaliaÃ§Ãµes contÃ­nuas de aprendizado e aplicaÃ§Ã£o prÃ¡tica. ApÃ³s a conclusÃ£o, realizamos um acompanhamento estruturado para medir indicadores quantitativos (como reduÃ§Ã£o de custos operacionais, aumento de receita internacional, diminuiÃ§Ã£o de erros em documentaÃ§Ã£o) e qualitativos (como melhoria na tomada de decisÃ£o, qualidade das negociaÃ§Ãµes internacionais, capacidade de anÃ¡lise de mercados). Nossos clientes tipicamente reportam ROI mensurÃ¡vel em trÃªs Ã¡reas principais: otimizaÃ§Ã£o de processos (reduÃ§Ã£o mÃ©dia de 15-30% em custos operacionais), expansÃ£o de mercados (aumento de 20-40% em vendas internacionais apÃ³s 12 meses) e mitigaÃ§Ã£o de riscos (reduÃ§Ã£o de 40-60% em problemas regulatÃ³rios e aduaneiros).
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Pronto para desenvolver competÃªncias globais na sua equipe?</h2>
          <p className="mb-6 max-w-3xl mx-auto">Entre em contato com nossos especialistas e descubra como a ACADEMY pode potencializar o sucesso da sua empresa no comÃ©rcio internacional.</p>
          <Link href="/contato" className="btn btn-primary font-semibold py-3 px-6 flex items-center justify-center">
            <Icon src="/icons/specialist.svg" alt="Specialist Icon" size="sm" className="mr-2" />
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
            "@type": "EducationalOrganization",
            "name": "ACADEMY - OLV Internacional",
            "description": "Plataforma educacional especializada em capacitaÃ§Ã£o para comÃ©rcio internacional e operaÃ§Ãµes globais.",
            "url": "https://www.olvinternacional.com.br/academy",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            },
            "offers": {
              "@type": "Offer",
              "category": "EducaÃ§Ã£o em ComÃ©rcio Internacional",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL"
            }
          })
        }}
      />
    </PlatformLayout>
  );
} 

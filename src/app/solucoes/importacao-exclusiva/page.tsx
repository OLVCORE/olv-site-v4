import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importação Exclusiva para PMEs | OLV Internacional",
  description: "Crie sua rota de importação exclusiva, proteja sua margem e domine seu mercado com a mentoria estratégica da OLV Internacional.",
};

export default function ImportacaoExclusivaPage() {
  return (
    <MainLayout>
      {/* HERO – estilo hub, com sub-marca */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#141c2f] via-[#0a0f1d] to-[#141c2f] text-center py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4">
            OLV&nbsp;EXCLUSIVE™ – Inteligência de Importação com Rota Protegida
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pare de importar junto com seus concorrentes. Construa sua própria cadeia, proteja sua margem e domine seu nicho de mercado.
          </p>
          <a href="#lead-magnet" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-full transition">
            🚀 Quero meu Diagnóstico Gratuito
          </a>
        </div>
      </section>

      {/* PROBLEMA – cards chamativos */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-10">Por que a Importação Compartilhada Destrói Margem?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {title:'Vazamento de Inteligência',desc:'Seu fornecedor replica o produto e entrega aos seus concorrentes.'},
            {title:'Guerra de Preços',desc:'Quando todos vendem igual, o lucro some e o capital gira mais devagar.'},
            {title:'Sem Exclusividade',desc:'Você investe em P&D e marketing; o mercado copia sem esforço.'},
            {title:'Risco Cambial Oculto',desc:'Volumes pequenos diluídos impedem travar câmbio e frete de forma estratégica.'},
          ].map((card,i)=>(
            <div key={i} className="bg-[#141c2f] border border-yellow-600/20 rounded-xl p-6 shadow-lg hover:shadow-yellow-700/20 transition">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE REAL – prova social */}
      <section className="bg-[#0a0f1d] text-gray-200 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <blockquote className="italic text-lg md:text-xl leading-relaxed border-l-4 border-yellow-400 pl-4">
            “Cada vez que meu contêiner chegava, o mercado já estava inundado de cópias. Decidi construir minha própria base na origem, blindar minha cadeia e hoje sou eu quem dita o ritmo do setor.”
          </blockquote>
          <p className="mt-4 text-sm text-gray-400">Importador do segmento de brinquedos – caso real acompanhado pela OLV Internacional (nome preservado).</p>
        </div>
      </section>

      {/* SOLUÇÃO – etapas timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-10">Como Funciona o Método OLV Exclusive</h2>
        <ol className="relative border-l border-yellow-700 max-w-3xl mx-auto">
          {[
            'Diagnóstico Estratégico – mapeamos viabilidade, riscos e oportunidade de margem',
            'Modelagem da Cadeia – agente exclusivo, base na origem, modal e cobertura fiscal',
            'Abertura de Canal – negociação direta via OLV Connecta, sem atravessadores',
            'Execução Blindada – embarque dedicado, documentação e compliance integral',
            'Nacionalização Otimizada – recepção em SC, SP ou CE conforme logística e impostos',
            'Aceleração Comercial – canais B2B, marketplaces e marketing de performance',
          ].map((step,idx)=>(
            <li key={idx} className="mb-10 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full text-black font-bold">{idx+1}</span>
              <p className="text-gray-300 text-sm md:text-base">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* LEAD MAGNET – formulário */}
      <section id="lead-magnet" className="bg-yellow-400 text-black px-6 py-14 text-center max-w-xl mx-auto my-16 rounded-xl shadow-xl">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">Pronto para Dominar Sua Rota?</h3>
        <p className="text-md mb-8">Solicite um diagnóstico gratuito e receba um plano de ação personalizado.</p>
        <form className="space-y-4" action="https://formspree.io/f/mayvlzyq" method="POST">
          <input type="hidden" name="source" value="importacao-exclusiva-landing" />
          <input name="nome" type="text" placeholder="Seu Nome" required className="w-full rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800" />
          <input name="email" type="email" placeholder="Seu E-mail" required className="w-full rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800" />
          <textarea name="mensagem" placeholder="Resumo da sua operação" className="w-full h-32 rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800"></textarea>
          <button type="submit" className="w-full bg-black text-yellow-400 py-3 rounded-md font-bold hover:bg-yellow-800 transition">Quero meu Diagnóstico</button>
        </form>
      </section>
    </MainLayout>
  );
} 
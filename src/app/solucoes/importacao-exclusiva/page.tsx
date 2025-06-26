import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importação Exclusiva para PMEs | OLV Internacional",
  description: "Crie sua rota de importação exclusiva, proteja sua margem e domine seu mercado com a mentoria estratégica da OLV Internacional.",
};

export default function ImportacaoExclusivaPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-center p-12 text-yellow-100 rounded-xl max-w-6xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6">
          Crie sua Rota Exclusiva de Importação
        </h1>
        <p className="text-lg md:text-xl text-yellow-200 max-w-3xl mx-auto mb-8">
          Deixe sua PME sair da dependência e da guerra de preços. Domine sua cadeia de importação com exclusividade, proteção e resultados reais.
        </p>
        <a href="#lead-magnet" className="inline-block bg-yellow-400 text-black font-medium py-3 px-6 rounded-full hover:bg-yellow-300 transition">
          🚀 Quero meu Diagnóstico Gratuito
        </a>
      </section>

      {/* Case Real */}
      <section className="bg-zinc-800 text-yellow-100 px-6 py-12 max-w-5xl mx-auto my-12 rounded-xl shadow-inner">
        <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400 mb-6 text-center">Caso Real: A Virada de Jogo de uma PME</h2>
        <p className="text-md md:text-lg leading-relaxed mb-4">
          "Toda vez que meu contêiner chegava, os chineses já tinham espalhado o produto. Copiavam, queimavam meus preços e derrubavam meu mercado. Então virei o jogo."
        </p>
        <p className="text-md md:text-lg leading-relaxed">
          Montei minha própria estrutura na origem, cortei intermediários e hoje sou <strong>eu</strong> quem abastece os atacadistas. Controle total, margem protegida.
        </p>
      </section>

      {/* Problemas */}
      <section className="bg-zinc-900 text-yellow-100 px-6 py-10 max-w-6xl mx-auto rounded-xl shadow-md my-12">
        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 text-center">Por que PMEs Perdem Mercado na Importação Compartilhada?</h3>
        <ul className="list-disc list-inside text-yellow-200 space-y-4">
          <li>Seu produto é conhecido antes mesmo de chegar.</li>
          <li>O fornecedor replica e vende para outros importadores.</li>
          <li>Você vira cobaia de mercado para a concorrência lucrar.</li>
          <li>Sua margem é destruída pela guerra de preços.</li>
        </ul>
      </section>

      {/* Solução */}
      <section className="px-6 py-10 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 text-yellow-100 max-w-6xl mx-auto rounded-xl my-12">
        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-6 text-center">Nossa Solução: Importação Estratégica com Exclusividade</h3>
        <p className="text-md md:text-lg leading-relaxed mb-4">
          A OLV Internacional ajuda sua PME a criar uma operação protegida, lucrativa e independente. Oferecemos:
        </p>
        <ul className="list-disc list-inside text-yellow-200 space-y-4">
          <li>Curadoria e negociação direta com fornecedores confiáveis.</li>
          <li>Blindagem da carga com embarques dedicados.</li>
          <li>Nacionalização 100% estratégica e fiscalmente otimizada.</li>
          <li>Estrategia comercial: canais B2B, marketplaces e revendas.</li>
        </ul>
      </section>

      {/* Lead Magnet */}
      <section id="lead-magnet" className="bg-yellow-400 text-black px-6 py-10 text-center max-w-xl mx-auto my-12 rounded-xl shadow-lg">
        <h3 className="text-xl md:text-3xl font-semibold mb-6">🚀 Agende um Diagnóstico Gratuito</h3>
        <p className="text-md mb-6">Identifique gargalos, crie vantagens exclusivas e proteja suas margens.</p>
        <form className="space-y-4" action="https://formspree.io/f/mayvlzyq" method="POST">
          <input type="hidden" name="source" value="importacao-exclusiva-landing" />
          <input name="nome" type="text" placeholder="Seu Nome" required className="w-full rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800" />
          <input name="email" type="email" placeholder="Seu E-mail" required className="w-full rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800" />
          <textarea name="mensagem" placeholder="Sua necessidade" className="w-full h-32 rounded px-4 py-3 border-2 border-yellow-600 placeholder-black focus:ring-2 focus:ring-yellow-800"></textarea>
          <button type="submit" className="w-full bg-black text-yellow-400 py-3 rounded-md font-bold hover:bg-yellow-800 transition">Quero meu Diagnóstico!</button>
        </form>
      </section>
    </MainLayout>
  );
} 
import Link from 'next/link';
import Image from 'next/image';

const sims = [
  {
    slug: '/simuladores/importacao',
    title: 'Custo de Importação',
    desc: 'Calcule impostos, frete, despesas e câmbio para saber o custo total landed.',
    icon: '/icons/import-icon.svg',
    highlight: true,
  },
  {
    slug: '/simuladores/exportacao',
    title: 'Custo de Exportação',
    desc: 'Simule margem, preços FOB/CIF e compare cenários de incentivo.',
    icon: '/icons/export-icon.svg',
    highlight: true,
  },
  {
    slug: '/simuladores/frete-light',
    title: 'Frete Internacional',
    desc: 'Compare custos aéreo, marítimo, rodoviário e ferroviário.',
    icon: '/icons/truck-gear.svg',
  },
  {
    slug: '/simuladores/cambio',
    title: 'Conversor de Moedas',
    desc: 'Taxas de câmbio em tempo real para +150 moedas.',
    icon: '/icons/currency-exchange.svg',
  },
  {
    slug: '/simuladores/cubagem',
    title: 'Simulador de Cubagem',
    desc: 'Descubra ocupação ideal por contêiner ou caminhão.',
    icon: '/icons/box.svg',
  },
  {
    slug: '/simuladores/tributario-light',
    title: 'Tributos Importação',
    desc: 'ICMS, IPI, PIS/COFINS, II federais e estaduais (IBPT).',
    icon: '/icons/tax.svg',
  },
];

export default function RadarHub(){
  return (
    <section className="section py-6" id="simuladores">
      <div className="container">
        <div className="section-heading mb-2 flex items-center gap-3">
          <div className="w-14 h-14 mb-1 rounded-full bg-[#0a0f1d] border-2 border-[#d4af37] flex items-center justify-center">
            <Image src="/icons/calculator.svg" alt="Ícone Simuladores" width={28} height={28} />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-[#d4af37]">Radar 360 Hub – Simuladores & Calculadoras</h2>
        </div>
        <p className="text-gray-400 mb-4 text-sm max-w-3xl">Ferramentas gratuitas para estimar custos de importação, exportação e logística, gerando insights em menos de 1 minuto.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sims.map(sim=> (
            <Link key={sim.slug} href={sim.slug} className="bg-[#141c2f] p-3 rounded-lg border border-[#2a3448] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4af37] hover:shadow-[0_0_0_2px_var(--color-accent)] flex items-start gap-3">
              <Image src={sim.icon} alt={sim.title} width={24} height={24} className="mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-gray-200 font-semibold text-sm mb-1">{sim.title}</h3>
                <p className="text-gray-400 text-xs leading-snug max-w-[220px]">{sim.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../icons/Icon';

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
    <section className="py-12 bg-gradient-to-r from-[#0a0f1d] via-[#10182b] to-[#0a0f1d] border-y border-[#1e293b]">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6 text-[#d4af37] drop-shadow">Radar 360 Hub – Simuladores & Calculadoras</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm">Ferramentas gratuitas para estimar custos e otimizar suas decisões rapidamente.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sims.map(sim=>{
            const CardClass = sim.highlight ? 'md:col-span-2 lg:col-span-2' : '';
            return (
              <Link key={sim.slug} href={sim.slug} className={`${CardClass} group relative rounded-xl p-6 bg-white/5 backdrop-blur border border-amber-400/40 hover:border-amber-400 transition shadow-lg hover:shadow-amber-400/20 overflow-hidden`}>
                <span className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <div className="relative z-10 flex items-start gap-3">
                  <Image src={sim.icon} alt="icon" width={36} height={36} className="flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{sim.title}</h3>
                    <p className="text-gray-300 text-xs leading-snug">{sim.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
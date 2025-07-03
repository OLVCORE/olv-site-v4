"use client";

import React from 'react';
import Link from 'next/link';

const Ticker: React.FC = () => {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        <p>
          <span><Link href="/radar360">Radar 360 Ativo</Link> – </span>
          <span>
            <Link href="https://www.bcb.gov.br/estatisticas/mercadoabertodiario" target="_blank">
              Câmbio em Tempo Real
            </Link> – 
          </span>
          <span><Link href="/solucoes">Consultoria Premium em Logística</Link> – </span>
          <span>
            <Link href="https://comexstat.mdic.gov.br/" target="_blank">
              Últimas do Blog OLV Internacional
            </Link> – 
          </span>
          <span><Link href="/contato">Fale com um Especialista Agora Mesmo</Link></span>
        </p>
      </div>
    </div>
  );
};

export default Ticker; 
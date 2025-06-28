import Link from 'next/link';

export default function Disclaimer() {
  return (
    <aside className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50/60 text-blue-900 dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-100 text-sm rounded">
      <strong>Aviso de Responsabilidade</strong> — Este conteúdo tem caráter educacional e ilustrativo. Não constitui
      aconselhamento jurídico, contábil, fiscal ou de investimentos. Custos, alíquotas e requisitos podem mudar sem aviso
      prévio. Antes de tomar decisões, consulte legislação vigente e profissionais habilitados. A OLV Internacional não se
      responsabiliza por perdas decorrentes do uso direto destas informações. Para um diagnóstico personalizado,
      <Link href="/contato" className="underline font-medium ml-1">fale com nossos consultores</Link>.
    </aside>
  );
} 
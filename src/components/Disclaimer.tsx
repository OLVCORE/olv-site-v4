import Link from 'next/link';

export default function Disclaimer() {
  return (
    <aside className="mt-8 p-4 border-l-4 border-blue-600 bg-blue-50 text-blue-900 dark:border-blue-500 dark:bg-blue-800/30 dark:text-blue-100 text-sm rounded">
      <strong>Aviso de Responsabilidade</strong> — Este conteúdo tem caráter educacional e ilustrativo. Não constitui
      aconselhamento jurídico, contábil, fiscal ou de investimentos. Custos, alíquotas e requisitos podem mudar sem aviso
      prévio. Antes de tomar decisões, consulte legislação vigente e profissionais habilitados. A OLV Internacional não se
      responsabiliza por perdas decorrentes do uso direto destas informações. Para um diagnóstico personalizado,
      <Link href="/contato" className="underline font-medium ml-1">fale com nossos consultores</Link>.
    </aside>
  );
} 
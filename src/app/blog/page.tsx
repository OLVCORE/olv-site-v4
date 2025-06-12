import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'Blog | OLV Internacional',
  description: 'Conteúdo especializado sobre comércio exterior, estratégia, operações internacionais e soluções para PMEs.'
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Como as PMEs podem acessar o mercado internacional com segurança',
      excerpt: 'Descubra as estratégias e ferramentas essenciais para que pequenas e médias empresas possam iniciar suas operações internacionais com menor risco e maior retorno.',
      image: '/images/blog/pme-internacional.jpg',
      author: 'Equipe OLV',
      date: '10 Jan 2023',
      category: 'Estratégia Internacional',
      slug: 'pmes-mercado-internacional'
    },
    {
      id: 2,
      title: 'Inteligência de dados: o combustível para decisões de negócios globais',
      excerpt: 'A análise de dados se tornou fundamental para empresas que operam internacionalmente. Veja como utilizar dados para obter vantagem competitiva e mitigar riscos.',
      image: '/images/blog/inteligencia-dados.jpg',
      author: 'Equipe OLV',
      date: '24 Fev 2023',
      category: 'Business Intelligence',
      slug: 'inteligencia-dados-negocios-globais'
    },
    {
      id: 3,
      title: 'Importação sem mistérios: guia completo para novos importadores',
      excerpt: 'Um passo a passo detalhado para empresas que desejam iniciar suas operações de importação, desde a pesquisa de fornecedores até o desembaraço aduaneiro.',
      image: '/images/blog/importacao-guia.jpg',
      author: 'Equipe OLV',
      date: '17 Mar 2023',
      category: 'Importação',
      slug: 'guia-completo-importacao'
    },
    {
      id: 4,
      title: 'Compliance internacional: protegendo sua empresa em operações globais',
      excerpt: 'Entenda como implementar práticas de compliance eficazes para garantir a segurança jurídica, fiscal e operacional em transações internacionais.',
      image: '/images/blog/compliance-internacional.jpg',
      author: 'Equipe OLV',
      date: '05 Abr 2023',
      category: 'Compliance',
      slug: 'compliance-operacoes-globais'
    },
    {
      id: 5,
      title: 'Logística 4.0: o futuro do transporte internacional de cargas',
      excerpt: 'Novas tecnologias estão transformando a logística internacional. Conheça as inovações que estão reduzindo custos e aumentando a eficiência nas operações.',
      image: '/images/blog/logistica-4-0.jpg',
      author: 'Equipe OLV',
      date: '22 Mai 2023',
      category: 'Logística',
      slug: 'logistica-4-0-transporte-internacional'
    },
    {
      id: 6,
      title: 'Estratégias de financiamento para operações de comércio exterior',
      excerpt: 'Descubra as diferentes opções de financiamento disponíveis para empresas que atuam no comércio internacional e como escolher a mais adequada.',
      image: '/images/blog/financiamento-comex.jpg',
      author: 'Equipe OLV',
      date: '14 Jun 2023',
      category: 'Finanças',
      slug: 'financiamento-comercio-exterior'
    },
  ];

  const categories = [
    'Estratégia Internacional',
    'Business Intelligence',
    'Importação',
    'Exportação',
    'Compliance',
    'Logística',
    'Finanças',
    'Supply Chain',
    'Gestão'
  ];

  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÇÃO HERO BLOG */}
        <section className="section">
          <div className="container">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-blue-400">📚</span> Blog OLV Internacional
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Conteúdo especializado sobre comércio exterior, operações internacionais, estratégia e soluções para PMEs no mercado global.
              </p>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar no blog..." 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* CONTEÚDO PRINCIPAL */}
            <div className="w-full lg:w-2/3">
              <section className="section">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Artigos Recentes
                </h2>
                <div className="grid gap-8">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                          <div className="w-full h-full bg-gray-300 dark:bg-gray-700">
                            {/* Placeholder para imagem (em produção usaria Image do Next.js) */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                              <span>{post.image}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2.5 py-0.5 rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Por {post.author}
                            </span>
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                            >
                              Ler mais →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
                {/* Paginação */}
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center gap-1">
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
                      Anterior
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">2</button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">3</button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
                      Próxima
                    </button>
                  </nav>
                </div>
              </section>
            </div>
            
            {/* SIDEBAR */}
            <div className="w-full lg:w-1/3">
              {/* Categorias */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Categorias
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        href={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Posts Populares */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Posts Populares
                </h3>
                <ul className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <li key={post.id} className="flex gap-3">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded">
                        {/* Placeholder para imagem miniatura */}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {post.date}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-blue-600 p-6 rounded-lg shadow-md text-white">
                <h3 className="text-lg font-bold mb-2">
                  Inscreva-se na nossa Newsletter
                </h3>
                <p className="mb-4 text-blue-100">
                  Receba conteúdo exclusivo sobre comércio exterior e negócios internacionais.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button 
                    type="submit"
                    className="w-full px-4 py-2 bg-white text-blue-600 font-bold rounded hover:bg-blue-50 transition-colors"
                  >
                    Inscrever-se
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA FINAL */}
        <section className="section">
          <div className="container">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Busca conteúdo específico para sua empresa?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Nossos especialistas podem desenvolver análises e conteúdos customizados para o seu setor e desafios específicos.
              </p>
              <Link 
                href="/contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors"
              >
                Solicitar Consultoria de Conteúdo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
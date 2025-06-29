import React from 'react';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | OLV Internacional',
  description:
    'Conteúdo especializado sobre comércio exterior, estratégia, operações internacionais e soluções para PMEs.',
  keywords:
    'blog de comércio exterior, notícias de importação e exportação, dicas de logística internacional, análises de mercado global',
  alternates: {
    canonical: 'https://olvinternacional.com.br/blog',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts(12);

  // fallback demo posts if empty
  const fallback = [
    {
      slug: 'demo-post',
      title: 'Conteúdo em breve',
      excerpt: 'Estamos preparando artigos frescos para você. Volte em breve!',
      cover_url: '/images/blog/default-news.svg',
      author: 'Equipe OLV',
      published_at: new Date().toISOString(),
      category: 'Geral',
    },
  ];

  const list = posts.length ? posts : fallback;

  const categories = [
    'Estratégia Internacional',
    'Business Intelligence',
    'Importação',
    'Exportação',
    'Compliance',
    'Logística',
    'Finanças',
    'Supply Chain',
    'Gestão',
  ];

  return (
    <MainLayout>
      <div className="main-content">
        {/* SEÇÃO HERO BLOG */}
        <section className="section">
          <div className="container">
            <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="text-accent">📚</span> Blog OLV Internacional
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Conteúdo especializado sobre comércio exterior, operações
                internacionais, estratégia e soluções para PMEs no mercado
                global.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar no blog..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
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
                  {list.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                          <div className="w-full h-full bg-gray-300 dark:bg-gray-700">
                            {/* Placeholder para imagem (em produção usaria Image do Next.js) */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                              <span>{post.cover_url || '/images/blog/default-news.svg'}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs font-medium bg-accent-light text-accent px-2.5 py-0.5 rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(post.published_at).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:text-accent dark:hover:text-accent"
                            >
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
                              className="text-accent font-medium hover:underline"
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
                    <button className="px-3 py-1 btn btn-primary">1</button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
                      2
                    </button>
                    <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
                      3
                    </button>
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
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-accent"
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
                  {list.slice(0, 3).map((post) => (
                    <li key={post.slug} className="flex gap-3">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded">
                        {/* Placeholder para imagem miniatura */}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-accent"
                          >
                            {post.title}
                          </Link>
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {new Date(post.published_at).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-primary text-on-primary p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-2">
                  Inscreva-se na nossa Newsletter
                </h3>
                <p className="mb-4 text-on-primary/80">
                  Receba conteúdo exclusivo sobre comércio exterior e negócios
                  internacionais.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 btn btn-primary font-bold"
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
                Nossos especialistas podem desenvolver análises e conteúdos
                customizados para o seu setor e desafios específicos.
              </p>
              <Link
                href="https://api.olvinternacional.com.br/contato"
                className="btn btn-primary font-bold py-3 px-6"
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

import React from 'react';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getAllPosts } from '@/lib/posts';
import { CATEGORIES } from '@/lib/blogConfig';
import dynamic from 'next/dynamic';

// SEO SACRAMENTADO - igual às outras páginas
export const metadata = {
  title: 'Blog | OLV Internacional - Conteúdo Especializado em Comércio Exterior',
  description: 'Conteúdo especializado sobre comércio exterior, estratégia, operações internacionais e soluções para PMEs. Artigos sobre importação, exportação, logística e supply chain.',
  keywords: 'blog comércio exterior, artigos importação exportação, conteúdo especializado comex, notícias logística internacional, dicas supply chain, análise mercado global, consultoria comex, estratégia internacional, operações globais, PMEs comércio exterior',
  alternates: {
    canonical: 'https://olvinternacional.com.br/blog',
  },
};

// Função utilitária para imagem padrão OLV por categoria
function getImageUrl(post: { cover_url?: string, category?: string }) {
  if (post.cover_url && post.cover_url.startsWith('http')) {
    return post.cover_url;
  }
  const map: Record<string, string> = {
    'Estratégia Internacional': '/images/blog/default-internacional.png',
    'Business Intelligence': '/images/blog/default-bi.png',
    'Importação': '/images/blog/default-importacao.png',
    'Exportação': '/images/blog/default-exportacao.png',
    'Compliance': '/images/blog/default-compliance.png',
    'Logística': '/images/blog/default-logistica.png',
    'Finanças': '/images/blog/default-financas.png',
    'Supply Chain': '/images/blog/default-supplychain.png',
    'Gestão': '/images/blog/default-gestao.png',
    'Internacional': '/images/blog/default-internacional.png',
    'PMEs': '/images/blog/default-pmes.png',
    'Outros': '/images/blog/default-outros.png',
  };
  return map[post.category || 'Outros'] || '/images/blog/default-news.svg';
}

// Importa dinamicamente o componente de busca (Client Component)
const BlogSearch = dynamic(() => import('../../components/blog/BlogSearch'), { 
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-700 h-12 rounded-lg"></div>
});

export default async function BlogPage({ searchParams }: { searchParams: { limit?: string } }) {
  const limit = parseInt(searchParams?.limit || '12');
  const posts = await getAllPosts(limit);

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

  const list = posts && posts.length ? posts : fallback;

  // Contador de categorias
  const categoryCounts: Record<string, number> = {};
  list.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
  });

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
              {/* Componente de busca client-side */}
              <BlogSearch posts={list} />
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
                          <img
                            src={getImageUrl(post)}
                            alt={post.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }}
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className="text-xs font-medium px-2.5 py-0.5 rounded"
                              style={{ color: '#1e40af', background: '#e0e7ff' }}
                            >
                              {post.category}
                            </span>
                            <span className="text-xs" style={{ color: '#1e40af' }}>
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

                {/* Selector de quantidade */}
                <div className="mt-6 flex gap-2 items-center">
                  <span>Mostrar:</span>
                  {[5, 10, 15, 20].map((v) => (
                    <Link
                      key={v}
                      href={`/blog?limit=${v}`}
                      className={`px-3 py-1 rounded ${limit === v ? 'bg-accent text-white' : 'bg-gray-700'}`}
                    >
                      {v}
                    </Link>
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
                  {CATEGORIES.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={`/blog/categoria/${encodeURIComponent(category)}`}
                        className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-accent"
                      >
                        <span>{category}</span>
                        <span className="ml-2 text-xs text-gray-500">{categoryCounts[category] || 0}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Posts Populares */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Posts Populares
                </h3>
                {/* Implemente lógica de populares se desejar */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
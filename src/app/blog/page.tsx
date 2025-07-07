import React from 'react';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { getAllPosts, getCategoryCounts } from '@/lib/posts';
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

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  let posts, categoryCounts;
  try {
    const POSTS_PER_PAGE = 10;
    const page = parseInt(searchParams?.page || '1');
    const offset = (page - 1) * POSTS_PER_PAGE;
    posts = await getAllPosts(1000); // Busca todos para simular paginação simples
    categoryCounts = await getCategoryCounts();
    categoryCounts = categoryCounts || {};
    console.log('[SSR BLOG] posts:', posts);
    console.log('[SSR BLOG] categoryCounts:', categoryCounts);
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
    const paginated = list.slice(offset, offset + POSTS_PER_PAGE);
    const totalPages = Math.ceil(list.length / POSTS_PER_PAGE);
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
                    {paginated.map((post) => (
                      <article
                        key={post.slug}
                        className="blog-card shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="md:flex flex-col md:flex-row">
                          <div className="w-full md:w-1/3 relative h-48 md:h-auto">
                            <img
                              src={getImageUrl(post)}
                              alt={post.title}
                              className="block"
                              onError={e => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = '/images/blog/default-news.svg';
                              }}
                            />
                          </div>
                          <div className="p-6 md:w-2/3 flex flex-col justify-center">
                            <h3 className="blog-title text-xl font-bold mb-2">
                              <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-accent dark:hover:text-accent"
                              >
                                {post.title}
                              </Link>
                            </h3>
                            <p className="blog-excerpt mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <span className="blog-meta text-sm">
                                {new Date(post.published_at).toLocaleDateString('pt-BR')} • {post.author}
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
                  {/* Paginação simples */}
                  <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <Link
                        key={i}
                        href={`/blog?page=${i + 1}`}
                        className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-accent text-white' : 'bg-gray-700 text-white'}`}
                      >
                        {i + 1}
                      </Link>
                    ))}
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
                          href={`/blog?category=${encodeURIComponent(category)}`}
                          className="text-gray-700 dark:text-gray-300 hover:text-accent"
                        >
                          {category} <span className="text-xs text-gray-400">{(categoryCounts && categoryCounts[category]) || 0}</span>
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
  } catch (err) {
    console.error('[SSR BLOG ERROR]', err, { posts, categoryCounts });
    // Fallback seguro: nunca quebra o SSR
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog temporariamente indisponível</h1>
          <p className="text-lg text-gray-400 mb-8">Estamos resolvendo um problema técnico. Tente novamente em instantes.</p>
          <Link href="/" className="text-accent underline">Voltar para a página inicial</Link>
        </div>
      </MainLayout>
    );
  }
}
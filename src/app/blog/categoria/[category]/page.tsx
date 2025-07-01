import { getPostsByCategory } from '@/lib/posts';
import MainLayout from '../../../../components/layout/MainLayout';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/blogConfig';

interface Params {
  params: { category: string };
  searchParams: { limit?: string; page?: string };
}

async function getCategoryCounts() {
  try {
    const res = await fetch('/api/posts/categories', { cache: 'no-store' });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

export const metadata = { title: 'Blog | Categoria' };

export default async function CategoryPage({ params, searchParams }: Params) {
  const decoded = decodeURIComponent(params.category);
  if (!CATEGORIES.includes(decoded as any)) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold">Categoria não encontrada</h1>
          <Link href="/blog" className="text-accent underline">Voltar ao blog</Link>
        </div>
      </MainLayout>
    );
  }

  const limit = parseInt(searchParams.limit || '10');
  const page = parseInt(searchParams.page || '1');
  const posts = await getPostsByCategory(decoded, limit, page);
  const categories = CATEGORIES;
  const categoryCounts = await getCategoryCounts();

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-accent">{decoded}</h1>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-700 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                  {post.title}
                </Link>
              </h2>
              <p className="mb-2 text-gray-400">{post.excerpt}</p>
              <span className="text-sm text-gray-500">
                {new Date(post.published_at).toLocaleDateString('pt-BR')}
              </span>
            </article>
          ))}
        </div>
        {/* Sidebar de categorias com contagem dinâmica */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8 mt-8">
          <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            Categorias
          </h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  href={`/blog/categoria/${encodeURIComponent(category)}`}
                  className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-accent"
                >
                  <span>{category}</span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {categoryCounts[category] || 0}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Selector */}
        <div className="mt-8 flex gap-2 items-center">
          <span>Mostrar:</span>
          {[5, 10, 15, 20].map((v) => (
            <Link
              key={v}
              href={`/blog/categoria/${encodeURIComponent(decoded)}?limit=${v}`}
              className={`px-3 py-1 rounded ${limit === v ? 'bg-accent text-white' : 'bg-gray-700'}`}
            >
              {v}
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export const revalidate = 600; 
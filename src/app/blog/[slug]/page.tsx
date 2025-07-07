import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MainLayout from '../../../components/layout/MainLayout';
import { getPostBySlug } from '@/lib/posts';
import { getPostsByCategory } from '@/lib/posts';
import Link from 'next/link';

interface Params { params: { slug: string } }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog OLV Internacional`,
    description: post.excerpt ?? undefined,
    alternates: {
      canonical: `https://olvinternacional.com.br/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.cover_url ? [post.cover_url] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return (
      <MainLayout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold">Postagem não encontrada</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <article className="container py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {new Date(post.published_at).toLocaleDateString('pt-BR')} • {post.author}
        </div>
        {post.cover_url && (
          <img
            src={post.cover_url}
            alt={post.title}
            className="mx-auto rounded-lg mb-6"
            style={{ maxWidth: '350px', width: '100%', height: 'auto', display: 'block' }}
          />
        )}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown rehypePlugins={[remarkGfm]}>{post.content_mdx}</ReactMarkdown>
        </div>
        {post.source_name && post.source_url && (
          <p className="mt-6 text-sm text-gray-400">
            Fonte: <a href={post.source_url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">clique aqui</a>
          </p>
        )}

        {/* Related */}
        <hr className="my-8 border-gray-700" />
        <h3 className="text-xl font-semibold mb-4">Artigos relacionados</h3>
        {/* @ts-ignore async ok */}
        <RelatedPosts category={post.category} slug={post.slug} />
      </article>
    </MainLayout>
  );
}

async function RelatedPosts({ category, slug }: { category: string | null; slug: string }) {
  if (!category) return null;
  const posts = await getPostsByCategory(category, 3, 1);
  const filtered = posts.filter((p) => p.slug !== slug);
  if (!filtered.length) return null;
  return (
    <ul className="space-y-2">
      {filtered.map((p) => (
        <li key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="hover:text-accent underline">
            {p.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export const revalidate = 3600; // ISR: 1 hour 
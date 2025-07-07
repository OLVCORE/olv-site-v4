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
      <article className="container max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg px-4 md:px-10 py-8 mt-8 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-center text-gray-900 dark:text-white leading-tight drop-shadow-sm">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 text-center">
          {new Date(post.published_at).toLocaleDateString('pt-BR')} • {post.author}
        </div>
        {post.cover_url && (
          <div className="flex justify-center mb-8">
            <div className="overflow-hidden rounded-2xl shadow-md max-w-[420px] w-full aspect-[7/5] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={post.cover_url}
                alt={post.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        )}
        <div className="prose dark:prose-invert max-w-none text-lg md:text-xl leading-relaxed mx-auto">
          <ReactMarkdown rehypePlugins={[remarkGfm]}>{post.content_mdx}</ReactMarkdown>
        </div>
        {post.source_name && post.source_url && (
          <p className="mt-8 text-sm text-center text-gray-400">
            Fonte: <a href={post.source_url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent font-semibold">{post.source_name}</a>
          </p>
        )}
        <hr className="my-10 border-gray-300 dark:border-gray-700" />
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Artigos relacionados</h3>
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
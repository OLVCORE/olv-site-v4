import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MainLayout from '../../../components/layout/MainLayout';
import { getPostBySlug } from '@/lib/posts';

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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.cover_url}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown rehypePlugins={[remarkGfm]}>{post.content_mdx}</ReactMarkdown>
        </div>
      </article>
    </MainLayout>
  );
}

export const revalidate = 3600; // ISR: 1 hour 
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import MainLayout from '../../../components/layout/MainLayout';
import { FaqSchema } from '../../../components/SeoSchemas';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AnswerFrontMatter {
  title: string;
  slug: string;
  description?: string;
  keywords?: string;
  mainQuestion?: string;
  faqs?: { q: string; a: string }[];
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'answers');

export async function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR);
  return files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '');
    return { slug };
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = getAnswer(params.slug);
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://olvinternacional.com.br/answers/${data.slug}`,
    },
  };
}

function getAnswer(slug: string) {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  return { data: data as AnswerFrontMatter, content };
}

export default function AnswerPage({ params }: { params: { slug: string } }) {
  const { data, content } = getAnswer(params.slug);
  return (
    <MainLayout>
      <div className="main-content container py-8">
        <h1 className="text-3xl font-bold mb-4 text-accent">{data.title}</h1>
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
      {data.mainQuestion && data.faqs ? (
        <FaqSchema mainQuestion={data.mainQuestion} faqs={data.faqs} />
      ) : null}
    </MainLayout>
  );
} 
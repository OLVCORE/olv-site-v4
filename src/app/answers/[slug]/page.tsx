import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '../../../components/layout/MainLayout';
import { FaqSchema } from '../../../components/SeoSchemas';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Disclaimer from '../../../components/Disclaimer';

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
  const result = getAnswer(params.slug);
  if (!result) {
    notFound();
  }
  const { data } = result;
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
  try {
    const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(raw);
    const cleaned = content.replace(/^.*Placeholder.*$/gim, '').trim();
    return { data: data as AnswerFrontMatter, content: cleaned };
  } catch (err) {
    return null;
  }
}

export default function AnswerPage({ params }: { params: { slug: string } }) {
  const result = getAnswer(params.slug);
  if (!result) return null;
  const { data, content } = result;
  return (
    <MainLayout className="page-answer">
      <div className="main-content container py-8">
        <h1 className="text-3xl font-bold mb-4 text-accent">{data.title}</h1>
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
        <Disclaimer />
      </div>
      {data.mainQuestion && data.faqs ? (
        <FaqSchema mainQuestion={data.mainQuestion} faqs={data.faqs} />
      ) : null}
    </MainLayout>
  );
} 
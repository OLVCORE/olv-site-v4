import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';

export const metadata = {
  title: 'FAQ | OLV Internacional',
  description: 'Perguntas frequentes sobre importação, logística, tributos e plataformas OLV.',
  alternates: { canonical: 'https://olvinternacional.com.br/faq' },
};

const CONTENT_DIR = path.join(process.cwd(), 'content', 'answers');

function getAllAnswers() {
  const files = fs.readdirSync(CONTENT_DIR);
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
    const { data } = matter(raw);
    return {
      title: data.title as string,
      slug: data.slug as string,
    };
  }).sort((a, b) => a.title.localeCompare(b.title));
}

export default function FaqPage() {
  const answers = getAllAnswers();
  return (
    <MainLayout>
      <div className="main-content container py-10">
        <h1 className="text-3xl font-bold mb-6 text-accent">Perguntas Frequentes (FAQ)</h1>
        <ul className="space-y-3">
          {answers.map((a) => (
            <li key={a.slug}>
              <Link href={`/answers/${a.slug}`} className="text-[#d4af37] hover:underline">
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
} 
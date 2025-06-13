const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');
const matter = require('gray-matter');
const removeMd = require('remove-markdown');
const { remove: removeDiacritics } = require('diacritics');

const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const OUT_PATH = path.join(__dirname, '..', 'public', 'search-index.json');

const files = fg.sync(['**/page.tsx', '../../content/**/*.mdx', '../../content/**/*.md'], { cwd: APP_DIR, absolute: true, dot: true, followSymbolicLinks: true });

const entries = [];

files.forEach((file) => {
  const raw = fs.readFileSync(file, 'utf8');
  const ext = path.extname(file);
  let title = '';
  let fullText = '';

  if (ext === '.md' || ext === '.mdx') {
    const { data, content } = matter(raw);
    title = data.title || path.basename(file, ext);
    fullText = removeMd(content);
  } else {
    // TSX: crude strip JSX/HTML tags and expressions
    title = (raw.match(/title:\s*['"`]([^'"`]+)['"`]/) || [null, path.basename(path.dirname(file))])[1];
    const withoutJSX = raw
      .replace(/<[^>]+>/g, ' ') // remove tags
      .replace(/\{[^}]+}/g, ' ') // remove expressions
      .replace(/\/\*[\s\S]*?\*\//g, ' ') // remove comments
      .replace(/\/\/.*$/gm, ' '); // remove line comments
    fullText = withoutJSX;
  }

  // slug computation
  let slug = file.replace(APP_DIR, '').replace(/\\page.tsx$/, '').replace(/\\index$/, '/').replace(/\\/g, '/');
  if (slug === '') slug = '/';

  const categoryMatch = slug.split('/').filter(Boolean)[0] || 'home';

  const excerpt = fullText.split(/\n|\r/).find((line) => line.trim().length > 40) || fullText.slice(0, 120);

  const searchText = removeDiacritics(fullText).toLowerCase();

  entries.push({ title, slug, category: categoryMatch, excerpt: excerpt.trim(), searchText });
});

fs.writeFileSync(OUT_PATH, JSON.stringify(entries, null, 2));
console.log(`🔍 Search index generated with ${entries.length} entries`); 
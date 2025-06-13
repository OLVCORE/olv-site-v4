const fs = require('fs');
const path = require('path');
const fg = require('fast-glob');

const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const OUT_PATH = path.join(__dirname, '..', 'public', 'search-index.json');

const files = fg.sync(['**/page.tsx'], { cwd: APP_DIR, absolute: true });

const entries = [];

files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf8');
  // extract title from metadata
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : path.basename(path.dirname(file));
  // slug
  let slug = file.replace(APP_DIR, '').replace(/\\page.tsx$/, '');
  slug = slug === '/page.tsx' ? '/' : slug;
  slug = slug.replace(/\\index$/, '/').replace(/\\/g, '/');
  // simple excerpt -> first heading or paragraph
  const hMatch = content.match(/<h[23][^>]*>([^<]{10,120})/);
  const excerpt = hMatch ? hMatch[1].replace(/\{[^}]+}/g, '').trim() : '';
  entries.push({ title, slug, excerpt });
});

fs.writeFileSync(OUT_PATH, JSON.stringify(entries, null, 2));
console.log(`🔍 Search index generated with ${entries.length} entries`); 
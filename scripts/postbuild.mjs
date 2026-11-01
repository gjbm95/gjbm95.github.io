// Post-build para GitHub Pages:
//  - Genera sitemap.xml a partir de las rutas pre-renderizadas.
//  - Publica la página 404 pre-renderizada como /404.html.
//  - Añade .nojekyll y limpia archivos internos del build.
import { existsSync, readFileSync, writeFileSync, copyFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = 'https://garrybruno.com.ve';
const OUT = 'docs';

const manifestPath = join(OUT, 'prerendered-routes.json');
if (!existsSync(manifestPath)) {
  console.error(`[postbuild] No se encontró ${manifestPath}. ¿Se ejecutó "ng build"?`);
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const routes = Array.isArray(manifest.routes) ? manifest.routes : Object.keys(manifest.routes ?? {});
const today = new Date().toISOString().slice(0, 10);

const indexable = routes
  .filter((r) => !['/404', '/inicio'].includes(r))
  .sort((a, b) => a.length - b.length || a.localeCompare(b));

const urls = indexable
  .map((r) => {
    const loc = r === '/' ? `${SITE_URL}/` : `${SITE_URL}${r}`;
    const priority = r === '/' ? '1.0' : '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

const notFound = join(OUT, '404', 'index.html');
if (existsSync(notFound)) {
  copyFileSync(notFound, join(OUT, '404.html'));
  rmSync(join(OUT, '404'), { recursive: true, force: true });
}

writeFileSync(join(OUT, '.nojekyll'), '');
rmSync(manifestPath, { force: true });
rmSync(join(OUT, 'index.csr.html'), { force: true });

console.log(`[postbuild] sitemap.xml con ${indexable.length} URLs, 404.html y .nojekyll listos en /${OUT}`);

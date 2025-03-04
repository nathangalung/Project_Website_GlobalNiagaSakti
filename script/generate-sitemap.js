import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const domain = 'https://globalsakti.com';

const pages = [
  { url: '/', priority: '1.00' },
  { url: '/about', priority: '0.80' },
  { url: '/product', priority: '0.80' },
  { url: '/customer', priority: '0.80' },
  { url: '/contact', priority: '0.80' },
  { url: '/pnp', priority: '0.60' },
  { url: '/tnc', priority: '0.60' },
  { url: '/disclaimer', priority: '0.60' }
];

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${domain}${page.url}</loc>
    <lastmod>${today}T00:00:00+00:00</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(__dirname, '../public/sitemap.xml'), sitemap);
console.log('Sitemap generated!');
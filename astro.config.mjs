import { defineConfig } from 'astro/config';

// site: yayındaki gerçek alan adı (SEO, sitemap ve paylaşım önizlemeleri için).
export default defineConfig({
  site: 'https://eczacivecihebengisu.blog',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});

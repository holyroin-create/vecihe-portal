import { defineConfig } from 'astro/config';

// site: Netlify'da site adını "vecihebengisu" yaparsanız adres aşağıdaki gibi olur.
// Kendi alan adınızı bağladığınızda bu satırı onunla değiştirin (SEO/sitemap için).
export default defineConfig({
  site: 'https://vecihebengisu.netlify.app',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
});

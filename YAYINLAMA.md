# Ücretsiz Yayınlama — Adım Adım

## Seçenek A: Netlify (önerilen — 10 dk, admin paneli en kolay burada çalışır)
1. github.com'da yeni repo açın, bu klasörü push edin.
2. app.netlify.com > "Add new site" > "Import from GitHub" > repoyu seçin.
   Build command: `npm run build` · Publish directory: `dist` (otomatik algılar).
3. Site yayında. Ücretsiz `xxx.netlify.app` adresi verir; kendi domaininizi de bağlayabilirsiniz.
4. Admin paneli için: GitHub > Settings > Developer settings > OAuth Apps > New OAuth App
   (callback URL: `https://api.netlify.com/auth/done`), Client ID/Secret'ı
   Netlify > Site configuration > Access & security > OAuth kısmına girin.
   `public/admin/config.yml` içindeki `repo:` satırını kendi reponuzla değiştirin.
   Artık `siteniz.netlify.app/admin` üzerinden içerik ekleyip silebilirsiniz.

## Seçenek B: GitHub Pages (tamamen GitHub içinde)
1. Repoyu push edin. Repo > Settings > Pages > Source: **GitHub Actions** seçin.
2. `.github/workflows/deploy.yml` hazır — her push otomatik yayınlar.
3. Repo adı `kullaniciadi.github.io` DEĞİLSE, `astro.config.mjs`'e şunu ekleyin:
   `base: '/REPO_ADI'` ve `site: 'https://kullaniciadi.github.io'`.
4. Admin paneli için GitHub Pages'ta ek bir OAuth proxy gerekir
   (ücretsiz: Cloudflare Worker + sveltia-cms-auth). Netlify'da bu adım yoktur.

## Yayın öncesi kontrol listesi
- [ ] `astro.config.mjs` > `site:` alanına gerçek adresinizi yazın
- [ ] `public/admin/config.yml` > `repo:` satırını güncelleyin
- [ ] Formspree'de ücretsiz form açıp `eczaciya-sor.astro` ve `iletisim.astro`
      içindeki `FORM_ID_BURAYA` kısmını değiştirin
- [ ] "Ben Kimim?" sayfasındaki zaman tüneli metinlerini gerçek bilgilerle güncelleyin

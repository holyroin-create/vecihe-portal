# Vecihe Bengisu — Sağlık & Yaşam Portalı

Astro (statik site) + Decap CMS (GitHub tabanlı admin) mimarisi.
Mevcut tek dosyalık siteden taşınan tasarım dili ve 8 yazı dahildir.

## Yerelde çalıştırma
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ klasörüne statik çıktı
```

## Yapı
```
src/content/blog/         → Blog yazıları (markdown, HTML gömülebilir)
src/content/soru-cevap/   → Yayınlanan "Eczacıya Sor" cevapları
src/data/sozler.json      → 60 sn'de bir dönen söz bandı
src/data/takvim.json      → 12 aylık sağlık & doğa takvimi
src/data/urunler.json     → Komisyonsuz ürün kütüphanesi
src/pages/                → Sayfalar (blog, quiz, takvim, hakkımda, ...)
public/admin/             → Decap CMS admin paneli
```

## Admin paneli (Decap CMS)
1. Projeyi bir GitHub reposuna push edin.
2. `public/admin/config.yml` içindeki `repo:` satırını kendi reponuzla değiştirin.
3. **Netlify ile (önerilen, en kolay):** Repoyu Netlify'a bağlayın
   (build command: `npm run build`, publish: `dist`). Netlify > Site settings >
   Identity yerine doğrudan **GitHub backend** kullanılır: Netlify'da
   "OAuth" uygulaması tanımlayıp GitHub'da bir OAuth App oluşturun
   (callback: `https://api.netlify.com/auth/done`). Ardından `siteniz.com/admin`
   adresinden GitHub hesabınızla giriş yapıp içerik ekleyip silebilirsiniz.
   Her kayıt otomatik commit atar; Netlify siteyi yeniden derler.
4. **GitHub Pages ile:** Decap'in GitHub backend'i bir OAuth proxy ister.
   Ücretsiz çözüm: `decap-proxy` veya Cloudflare Worker tabanlı
   `sveltia-cms-auth` kurup config.yml'e `base_url` ekleyin.

## Formlar (Eczacıya Sor & İletişim) — KVKK notu
Sorular **GitHub'a yazılmaz** (sağlık verisi olabilir). Form gönderileri
Formspree ile doğrudan e-postanıza düşer:
1. formspree.io'da ücretsiz form oluşturun.
2. `src/pages/eczaciya-sor.astro` ve `iletisim.astro` içindeki
   `FORM_ID_BURAYA` kısmını kendi form ID'nizle değiştirin.
3. Uygun soruları anonimleştirip admin panelinden "Eczacıya Sor (Yayınlanan)"
   koleksiyonuna cevabıyla birlikte ekleyin — kütüphane böyle büyür.

Canlı sohbet isterseniz: Crisp veya Tawk.to embed kodunu
`src/layouts/Base.astro` sonuna ekleyin (ücretsiz katman yeterli).

## Yeni yazı ekleme (admin panelsiz)
`src/content/blog/` altına `.md` dosyası ekleyin; ön madde (frontmatter)
alanları için mevcut dosyalara bakın. `draft: true` yazıyı gizler.

## Domain / SEO
`astro.config.mjs` içindeki `site:` alanını gerçek domaininizle değiştirin.
Her sayfa kendi URL'sinde statik HTML olarak üretilir (E-E-A-T/SEO uyumlu).

## Bilinçli olarak yapılmayanlar
- Komisyonlu affiliate linkleri: eczacılık mevzuatı (reklam yasağı) riski
  nedeniyle ürün sayfası link'siz/komisyonsuz kurgulandı. Oda'dan yazılı
  görüş alınmadan komisyonlu versiyona geçilmemesi önerilir.
- GitHub üzerinden canlı chat: teknik olarak uygunsuz ve KVKK açısından
  riskli olduğu için form + e-posta akışıyla değiştirildi.

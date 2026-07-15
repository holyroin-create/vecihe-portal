import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    dateLabel: z.string().optional(),
    pubDate: z.coerce.date(),
    readTime: z.string().optional(),
    excerpt: z.string(),
    accent: z.string().default('#2E6B4F'),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// "Eczacıya Sor" — yayınlanan, anonimleştirilmiş soru-cevaplar.
// Editoryal akış: soru formdan gelir -> eczacı onaylar/anonimleştirir -> buraya içerik olarak eklenir.
const soruCevap = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/soru-cevap' }),
  schema: z.object({
    question: z.string(),
    category: z.string().default('Genel'),
    pubDate: z.coerce.date(),
  }),
});

const sozler = defineCollection({
  loader: file('./src/data/sozler.json', { parser: (t) => JSON.parse(t).items }),
  schema: z.object({ id: z.string(), text: z.string(), author: z.string().optional() }),
});

const takvim = defineCollection({
  loader: file('./src/data/takvim.json', { parser: (t) => JSON.parse(t).items }),
  schema: z.object({
    id: z.string(),
    ay: z.string(),
    polen: z.string(),
    mevsimsel: z.array(z.string()),
    saglikGunleri: z.array(z.object({ gun: z.string(), ad: z.string() })),
    not: z.string().optional(),
  }),
});

const urunler = defineCollection({
  loader: file('./src/data/urunler.json', { parser: (t) => JSON.parse(t).items }),
  schema: z.object({
    id: z.string(),
    kategori: z.string(),
    ad: z.string(),
    aciklama: z.string(),
    etiketler: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, 'soru-cevap': soruCevap, sozler, takvim, urunler };

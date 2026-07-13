// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/feng-shui-luck',
  integrations: [
    starlight({
      title: '改運之書．風水篇',
      description: '結合紫微斗數與居家風水學,教你找出旺運方位,布置出安身立命的好居所。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '前言:何謂風水？風水與紫微斗數的關係', slug: 'unit00' },
        {
          label: '田宅宮與風水方位運用',
          items: [
            { label: '田宅宮的意義與居住環境選擇', slug: 'unit01' },
            { label: '各星曜對應的居住環境特徵', slug: 'unit02' },
            { label: '找出自己的風水好方位', slug: 'unit03' },
            { label: '從命盤看風水對自己的影響', slug: 'unit04' },
            { label: '十天干化忌對照各宮位解釋', slug: 'unit05' },
          ],
        },
        {
          label: '居家風水實務判斷',
          items: [
            { label: '傳統風水的基本邏輯與形家概念', slug: 'unit06' },
            { label: '方位涵義與煞、水的判斷原則', slug: 'unit07' },
            { label: '四方位地形好壞與潛意識影響', slug: 'unit08' },
            { label: '各類風水煞忌總覽', slug: 'unit09' },
            { label: '用生活知識化解常見煞氣', slug: 'unit10' },
            { label: '五黃煞方位與化煞安忍水做法', slug: 'unit11' },
          ],
        },
        { label: '結語:風水改運的正確心態', slug: 'unit12' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});

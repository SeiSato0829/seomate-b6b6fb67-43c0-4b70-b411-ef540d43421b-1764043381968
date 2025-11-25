import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-9-1764043380168.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 9'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-9-1764043380168.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});

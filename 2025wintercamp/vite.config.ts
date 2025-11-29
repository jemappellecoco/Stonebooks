import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // ⭐ GitHub Pages 子路徑（repo 名）
    base: '/2025wintercamp/',

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // 如果你在前端要用到 GEMINI 的 key
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
    },
  };
});

// next.config.js
import type { NextConfig } from "next";

/**
 * @type {NextConfig}
 */
const nextConfig: NextConfig = {
  reactStrictMode: true, // Включает строгий режим React (выявляет потенциальные проблемы)
  output: 'standalone', // Генерирует автономную сборку для Docker/Production
  images: {
    domains: ['dummyjson.com'], // Белый список доменов для оптимизации изображений
    unoptimized: false, // Включает автоматическую оптимизацию изображений
  },
  // Дополнительные параметры (опционально):
  compress: true, // Включает gzip-сжатие
  productionBrowserSourceMaps: false, // Отключает source maps в production для браузера
};

export default nextConfig;
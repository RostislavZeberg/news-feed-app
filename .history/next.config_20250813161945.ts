import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Включаем строгий режим React
  swcMinify: true,       // Включаем минификацию SWC
  images: {
    domains: ['dummyjson.com'], // Разрешаем загрузку изображений с этого домена
  },
};

export default nextConfig;

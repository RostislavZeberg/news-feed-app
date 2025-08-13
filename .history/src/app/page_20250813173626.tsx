import ClientProvider from '@/components/ClientProvider';
import NewsList from '@/components/NewsList';
import { fetchNews } from '@/lib/api';

export default async function Home() {
  // Получаем первые данные на сервере
  const initialData = await fetchNews(0, 10);

  return (
    <ClientProvider>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">News Feed</h1>
        <NewsList initialPosts={initialData.posts} />
      </main>
    </ClientProvider>
  );
}
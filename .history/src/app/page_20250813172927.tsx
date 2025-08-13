import ClientProvider from "@/components/ClientProvider";
import NewsList from "@/components/NewsList";

.

export default function Home() {
  // Здесь можно выполнять серверные операции
  const serverData = await fetchData(); // Пример получения данных на сервере
  
  return (
    <ClientProvider>
      {/* Передаем серверные данные как пропс */}
      <NewsList initialData={serverData} />
    </ClientProvider>
  );
}
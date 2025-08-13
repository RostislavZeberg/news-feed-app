import '@/styles/global.css';

import type { Metadata } from 'next';

// Экспорт константы metadata, которая содержит метаданные для страницы
// Эти данные используются для SEO и отображаются в браузере
export const metadata: Metadata = {
  title: 'News Feed App',          // Заголовок приложения (отображается во вкладке браузера)
  description: 'Infinite scroll news feed application',  // Описание приложения для SEO
};

// Экспорт компонента RootLayout по умолчанию
// Это корневой layout-компонент, который оборачивает все страницы приложения
export default function RootLayout({
  children,  // Пропс children - содержимое, которое будет вложено в layout
}: {
  children: React.ReactNode;  // Типизация пропса children как React-ноды
}) {
  return (
    // Базовый HTML-каркас приложения
    <html lang="en">  {/* Указываем язык страницы - английский */}
      <body>  {/* Тело документа */}
        {children}  {/* Вставляем содержимое страницы */}
      </body>
    </html>
  );
}
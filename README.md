# 📰 Next.js News Feed with Redux Toolkit

[![Next.js](https://img.shields.io/badge/Next.js-15.4+-000000.svg?logo=next.js)](https://nextjs.org)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9+-764ABC.svg?logo=redux)](https://redux-toolkit.js.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg?logo=typescript)](https://www.typescriptlang.org)

Профессиональное приложение ленты новостей с бесконечной прокруткой на Next.js 15, Redux Toolkit и TypeScript.

## ✨ Особенности
- **Гибридный рендеринг**: SSR + CSR
- **Бесконечный скролл**: Автоподгрузка контента
- **Стейт-менеджмент**: Redux Toolkit с TS
- **UI**: Ant Design + кастомные стили
- **Полная типобезопасность**

## 🚀 Запуск

### 1. Установка
```bash
git clone https://github.com/ваш-username/news-feed-app.git
cd news-feed-app
npm install

### 2. Development
```bash
npm run dev
# Открыть http://localhost:3000
Приложение доступно по адресу: http://localhost:3000

### 3. Production-сборка
```bash
npm run build && npm start

🛠 Технологический стек
```bash
Технология	Назначение	Версия
Next.js	Фреймворк с App Router	15.4+
Redux Toolkit	Управление состоянием	1.9+
TypeScript	Статическая типизация	5+
Ant Design	UI компоненты	5.x
React Hooks	Логика компонентов	18+

📂 Структура проекта
```bash
text
src/
├── app/                  # App Router
│   └── page.tsx          # Главная страница (SSR)
├── components/           # Компоненты
│   ├── NewsCard/         # Карточка новости
│   ├── NewsList/         # Список с бесконечным скроллом
│   └── ClientProvider/   # Redux Provider
├── lib/                  # API клиенты
│   └── api.ts            # Запросы к dummyjson.com
├── store/                # Redux
│   ├── features/         # Слайсы (newsSlice.ts)
│   └── store.ts          # Конфигурация хранилища
├── types/                # Типы TypeScript
└── hooks/                # Кастомные хуки (useInfiniteScroll)

🌐 Деплой
```bash
Вариант 1: Vercel (рекомендуется)
https://vercel.com/button

Вариант 2: Docker
bash
# Сборка образа
docker build -t news-feed .

# Запуск контейнера
docker run -p 3000:3000 news-feed
Вариант 3: Ручной деплой
Соберите проект: npm run build

Скопируйте папки из .next/standalone на сервер

Запустите: node server.js

🔧 Конфигурация
```bash
1. Настройка API
Создайте .env.local:

ini
NEXT_PUBLIC_API_URL=https://dummyjson.com
2. Параметры сборки
Файл next.config.js:

javascript
module.exports = {
  output: 'standalone', // Для Docker-сборки
  images: {
    domains: ['dummyjson.com'], // Разрешенные домены для изображений
  }
}

🧪 Тестирование
```bash
bash
# Проверка стиля кода
npm run lint

# Проверка типов TypeScript
npm run type-check

# Запуск тестов (если добавлены)
npm test

⚠️ Устранение проблем
```bash
Если возникают ошибки сборки:

bash
# Очистка кеша
rm -rf .next node_modules package-lock.json

# Переустановка зависимостей
npm install

# Повторная сборка
npm run build

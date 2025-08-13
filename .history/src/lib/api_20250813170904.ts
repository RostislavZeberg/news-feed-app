import { INews, INewsResponse } from '../types/news';

const BASE_URL = 'https://dummyjson.com';

// Экспортируем асинхронную функцию fetchNews для получения новостей
// Принимает параметры:
// skip - сколько новостей пропустить (по умолчанию 0)
// limit - сколько новостей получить (по умолчанию 10)
// Возвращает Promise с типом INewsResponse
export const fetchNews = async (skip: number = 0, limit: number = 10): Promise<INewsResponse> => {
  // Формируем URL запроса с параметрами limit и skip
  const url = `${BASE_URL}/posts?limit=${limit}&skip=${skip}`;
  
  // Выполняем HTTP-запрос с помощью fetch API
  const response = await fetch(url);
  
  // Проверяем, был ли запрос успешным (статус 200-299)
  if (!response.ok) {
    // Если нет - выбрасываем ошибку
    throw new Error('Failed to fetch news');
  }
  
  // Парсим JSON-ответ от сервера
  const data = await response.json();
  
  // Так как API не возвращает реакции (лайки/дизлайки), добавляем их вручную
  // Преобразуем массив постов, добавляя к каждому объект reactions
  const postsWithReactions = data.posts.map((post: Omit<INews, 'reactions'>) => ({
    ...post, // Копируем все существующие поля поста
    reactions: {
      likes: Math.floor(Math.random() * 100),   // Генерируем случайное число лайков (0-99)
      dislikes: Math.floor(Math.random() * 20)  // Генерируем случайное число дизлайков (0-19)
    }
  }));
  
  // Возвращаем данные, заменяя оригинальные посты на посты с реакциями
  return {
    ...data,          // Копируем все поля оригинального ответа
    posts: postsWithReactions  // Заменяем posts на модифицированную версию
  };
};
// Определяем тип для отдельной новости
export interface INews {
  id: number;         // Уникальный идентификатор новости
  title: string;      // Заголовок новости
  body: string;       // Текст новости
  userId: number;     // ID пользователя, создавшего новость
  tags: string[];     // Массив тегов новости
  reactions: number;  // Количество реакций
}

// Определяем тип для ответа API
export interface INewsResponse {
  posts: INews[];     // Массив новостей
  total: number;      // Общее количество новостей
  skip: number;       // Сколько новостей пропущено
  limit: number;      // Лимит новостей на странице
}
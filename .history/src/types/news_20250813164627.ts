// Определяем тип для реакций
export interface IReactions {
  likes: number;
  dislikes: number;
}

// Определяем тип для отдельной новости
export interface INews {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: IReactions;
}

// Определяем тип для ответа API
export interface INewsResponse {
  posts: INews[];
  total: number;
  skip: number;
  limit: number;
}
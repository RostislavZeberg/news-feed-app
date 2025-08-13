import { INews, INewsResponse } from '../types/news';

const BASE_URL = 'https://dummyjson.com';

export const fetchNews = async (skip: number = 0, limit: number = 10): Promise<INewsResponse> => {
  const url = `${BASE_URL}/posts?limit=${limit}&skip=${skip}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  
  const data = await response.json();
  
  // Добавляем реакции, так как API не возвращает их
  const postsWithReactions = data.posts.map((post: Omit<INews, 'reactions'>) => ({
    ...post,
    reactions: {
      likes: Math.floor(Math.random() * 100),
      dislikes: Math.floor(Math.random() * 20)
    }
  }));
  
  return {
    ...data,
    posts: postsWithReactions
  };
};
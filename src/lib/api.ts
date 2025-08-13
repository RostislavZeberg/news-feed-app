import { INewsResponse, INews } from '@/types/news';

const BASE_URL = 'https://dummyjson.com';

export const fetchNews = async (
  skip: number = 0,
  limit: number = 10
): Promise<INewsResponse> => {
  const response = await fetch(`${BASE_URL}/posts?limit=${limit}&skip=${skip}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }

  const data = await response.json();

  type ApiPost = Omit<INews, 'reactions'>;
  
  const postsWithReactions = data.posts.map((post: ApiPost) => ({
    ...post,
    reactions: {
      likes: Math.floor(Math.random() * 100),
      dislikes: Math.floor(Math.random() * 20),
    },
  }));

  return {
    ...data,
    posts: postsWithReactions,
  };
};
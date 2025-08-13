export const fetchNews = async (skip: number = 0, limit: number = 10): Promise<INewsResponse> => {
  const url = `${BASE_URL}/posts?limit=${limit}&skip=${skip}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  
  const data = await response.json();
  
  // Добавляем mock reactions, так как API не возвращает reactions
  const postsWithReactions = data.posts.map((post: any) => ({
    ...post,
    reactions: {
      likes: Math.floor(Math.random() * 100), // Генерируем случайные лайки
      dislikes: Math.floor(Math.random() * 20) // Генерируем случайные дизлайки
    }
  }));
  
  return {
    ...data,
    posts: postsWithReactions
  };
};
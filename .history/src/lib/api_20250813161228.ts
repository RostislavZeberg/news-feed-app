import { INewsResponse } from "@/types/news";

// Базовый URL API
const BASE_URL = 'https://dummyjson.com';

// Функция для получения новостей
export const fetchNews = async (skip: number = 0, limit: number = 10): Promise<INewsResponse> => {
  // Формируем URL с параметрами запроса
  const url = `${BASE_URL}/posts?limit=${limit}&skip=${skip}`;
  
  // Выполняем запрос
  const response = await fetch(url);
  
  // Проверяем статус ответа
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  
  // Парсим JSON и возвращаем данные
  return response.json();
};
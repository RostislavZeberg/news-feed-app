import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './features/newsSlice';

// Создаем Redux store
export const store = configureStore({
  reducer: {
    news: newsReducer, // Подключаем редьюсер для новостей
  },
});

// Экспортируем типы для работы с хранилищем
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
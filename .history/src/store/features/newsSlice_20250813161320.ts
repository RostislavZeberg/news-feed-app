import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '../../lib/api';
import { INews, INewsResponse } from '../../types/news';

// Состояние для новостей
interface NewsState {
  items: INews[];       // Массив новостей
  loading: boolean;     // Флаг загрузки
  error: string | null; // Сообщение об ошибке
  skip: number;         // Количество уже загруженных новостей
  hasMore: boolean;     // Есть ли еще новости для загрузки
}

// Начальное состояние
const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
  skip: 0,
  hasMore: true,
};

// Асинхронное действие для загрузки новостей
export const loadNews = createAsyncThunk<INewsResponse, void, { state: { news: NewsState } }>(
  'news/loadNews',
  async (_, { getState }) => {
    const { skip } = getState().news;
    return await fetchNews(skip);
  }
);

// Создаем slice
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка начала загрузки
      .addCase(loadNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Обработка успешной загрузки
      .addCase(loadNews.fulfilled, (state, action: PayloadAction<INewsResponse>) => {
        state.loading = false;
        // Добавляем новые новости к существующим
        state.items = [...state.items, ...action.payload.posts];
        // Увеличиваем счетчик пропущенных новостей
        state.skip = state.items.length;
        // Проверяем, есть ли еще новости для загрузки
        state.hasMore = state.items.length < action.payload.total;
      })
      // Обработка ошибки
      .addCase(loadNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load news';
      });
  },
});

// Экспортируем редьюсер
export default newsSlice.reducer;
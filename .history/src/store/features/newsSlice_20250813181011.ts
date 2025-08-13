import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '@/lib/api';
import { INews } from '@/types/news';

interface NewsState {
  items: INews[];
  loading: boolean;
  error: string | null;
  skip: number;
  hasMore: boolean;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
  skip: 0,
  hasMore: true,
};

// Action для установки начальных данных
export const setInitialData = createAction<INews[]>('news/setInitialData');

// Thunk для загрузки новостей
export const loadNews = createAsyncThunk(
  'news/loadNews',
  async (_, { getState }) => {
    const state = getState() as { news: NewsState };
    return await fetchNews(state.news.skip);
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка установки начальных данных
      .addCase(setInitialData, (state, action: PayloadAction<INews[]>) => {
        state.items = action.payload;
        state.skip = action.payload.length;
        state.hasMore = action.payload.length < 100; // Примерное условие
      })
      
      // Обработка начала загрузки
      .addCase(loadNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      
      // Обработка успешной загрузки
      .addCase(loadNews.fulfilled, (state, action: PayloadAction<{
        posts: INews[];
        total: number;
      }>) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.posts];
        state.skip = state.items.length;
        state.hasMore = state.items.length < action.payload.total;
      })
      
      // Обработка ошибки
      .addCase(loadNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load news';
      });
  },
});

export default newsSlice.reducer;
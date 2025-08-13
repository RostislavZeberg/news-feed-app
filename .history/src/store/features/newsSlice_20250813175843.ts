import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '../../lib/api';
import { INews } from '../../types/news';

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

export const loadNews = createAsyncThunk(
  'news/loadNews',
  async (_, { getState }) => {
    const { news } = getState() as { news: NewsState };
    const { skip } = news;
    return await fetchNews(skip);
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadNews.fulfilled, (state, action: PayloadAction<{
        posts: INews[];
        total: number;
      }>) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.posts];
        state.skip = state.items.length;
        state.hasMore = state.items.length < action.payload.total;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load news';
      });
  },
});

export default newsSlice.reducer;
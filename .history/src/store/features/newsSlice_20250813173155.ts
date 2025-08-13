import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchNews } from '@/lib/api';
import { INews, INewsResponse } from '@/types/news';

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
    const { skip } = (getState() as any).news;
    return await fetchNews(skip);
  }
);

export const setInitialData = createAsyncThunk(
  'news/setInitialData',
  async (initialData: INews[]) => {
    return initialData;
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
      .addCase(loadNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload.posts];
        state.skip = state.items.length;
        state.hasMore = state.items.length < action.payload.total;
      })
      .addCase(loadNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load news';
      })
      .addCase(setInitialData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.skip = action.payload.length;
      });
  },
});

export default newsSlice.reducer;
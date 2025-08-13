import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../../api/postsApi';
import { Post, PostsState } from './postsTypes';

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  hasMore: true,
  skip: 0,
};

export const loadPosts = createAsyncThunk(
  'posts/loadPosts',
  async (skip: number, { getState }) => {
    const response = await fetchPosts(skip);
    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.posts];
        state.skip = state.skip + 10;
        state.hasMore = action.payload.posts.length === 10;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load posts';
      });
  },
});

export default postsSlice.reducer;
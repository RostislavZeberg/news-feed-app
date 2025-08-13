'use client';

import { useEffect } from 'react';
import { Spin, Alert } from 'antd';
import NewsCard from '@/components/NewsCard';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { loadNews, setInitialData } from '@/store/features/newsSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { INewsResponse } from '@/types/news';

interface NewsListProps {
  initialData: INewsResponse;
}

export default function NewsList({ initialData }: NewsListProps) {
  const { items, loading, error, hasMore } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitialData(initialData.posts));
  }, [dispatch, initialData]);

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(loadNews());
    }
  };

  useInfiniteScroll(loadMore);

  return (
    <div className="max-w-3xl mx-auto">
      {items.map((news) => (
        <div key={news.id} className="mb-6">
          <NewsCard news={news} />
        </div>
      ))}
      {loading && (
        <div className="text-center my-8">
          <Spin size="large" />
        </div>
      )}

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
          className="my-4"
        />
      )}

      {!hasMore && !loading && items.length > 0 && (
        <div className="text-center text-gray-500 my-8">
          No more news to load
        </div>
      )}
    </div>
  );
}
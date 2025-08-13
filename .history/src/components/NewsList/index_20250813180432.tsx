"use client"
import { Spin, Alert } from 'antd';
import NewsCard from '../NewsCard';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { loadNews } from '../../store/features/newsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import styles from './styles.module.css';
import { useEffect } from 'react';

const NewsList: React.FC = () => {
  const { items, loading, error, hasMore } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(loadNews());
    }
  };

  useInfiniteScroll(loadMore);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(loadNews());
    }
  }, [dispatch, items.length]);

  return (
    <div className={styles.container}>
      {items.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
      
      {loading && (
        <div className={styles.loader}>
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
        />
      )}
      
      {!hasMore && !loading && items.length > 0 && (
        <div className={styles.endMessage}>
          No more news to load
        </div>
      )}
    </div>
  );
};

export default NewsList;
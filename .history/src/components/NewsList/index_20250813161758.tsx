import { useEffect } from 'react';
import { Spin, Alert } from 'antd';

import NewsCard from '../NewsCard';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { loadNews } from '../../store/features/newsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './styles.module.css';

const NewsList: React.FC = () => {
  // Получаем данные из хранилища
  const { items, loading, error, hasMore } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  // Функция для загрузки новостей
  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(loadNews());
    }
  };

  // Используем хук для бесконечного скролла
  useInfiniteScroll(loadMore);

  // Первая загрузка новостей
  useEffect(() => {
    if (items.length === 0) {
      dispatch(loadNews());
    }
  }, [dispatch, items.length]);

  return (
    <div className={styles.container}>
      {/* Отображение списка новостей */}
      {items.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
      
      {/* Индикатор загрузки */}
      {loading && (
        <div className={styles.loader}>
          <Spin size="large" />
        </div>
      )}
      
      {/* Сообщение об ошибке */}
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          closable
        />
      )}
      
      {/* Сообщение о конце списка */}
      {!hasMore && !loading && items.length > 0 && (
        <div className={styles.endMessage}>
          No more news to load
        </div>
      )}
    </div>
  );
};

export default NewsList;
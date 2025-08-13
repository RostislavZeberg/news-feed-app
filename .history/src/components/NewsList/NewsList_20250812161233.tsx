import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { loadPosts } from '../../features/posts/postsSlice';
import NewsCard from '../NewsCard/NewsCard';
import { Spin, Alert } from 'antd';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import styles from './styles.module.css';

const NewsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error, hasMore, skip } = useSelector(
    (state: RootState) => state.posts
  );

  const loadMore = () => {
    if (hasMore && !loading) {
      dispatch(loadPosts(skip));
    }
  };

  useInfiniteScroll(loadMore, loading, hasMore);

  React.useEffect(() => {
    if (posts.length === 0) {
      dispatch(loadPosts(0));
    }
  }, [dispatch, posts.length]);

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
      {loading && (
        <div className={styles.loading}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default NewsList;
import { useEffect } from 'react';

export const useInfiniteScroll = (
  loadMore: () => void,
  isLoading: boolean,
  hasMore: boolean
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading ||
        !hasMore
      ) {
        return;
      }
      loadMore();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore, loadMore]);
};
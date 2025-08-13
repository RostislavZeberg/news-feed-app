import { useEffect } from 'react';

// Кастомный хук для реализации бесконечного скролла
const useInfiniteScroll = (callback: () => void) => {
  useEffect(() => {
    // Функция обработки скролла
    const handleScroll = () => {
      // Вычисляем, достигли ли мы нижней части страницы
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        callback();
      }
    };

    // Добавляем обработчик события скролла
    window.addEventListener('scroll', handleScroll);
    
    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};

export default useInfiniteScroll;
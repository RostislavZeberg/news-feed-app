import { useEffect } from 'react';

// Создаем кастомный хук useInfiniteScroll
// Принимает callback - функцию, которая будет вызываться при достижении конца страницы
const useInfiniteScroll = (callback: () => void) => {
  // Используем хук useEffect для работы с побочными эффектами
  useEffect(() => {
    // Функция-обработчик события скролла
    const handleScroll = () => {
      // Получаем параметры скролла:
      const { 
        scrollTop,    // На сколько пикселей прокручен документ сверху
        clientHeight, // Высота видимой части документа (viewport)
        scrollHeight  // Полная высота документа с учетом прокрутки
      } = document.documentElement;
      
      // Проверяем, достигли ли мы нижней части страницы (с запасом в 100px)
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        callback(); // Вызываем переданную функцию
      }
    };

    // Добавляем слушатель события скролла на window
    window.addEventListener('scroll', handleScroll);
    
    // Функция очистки - выполняется при размонтировании компонента
    return () => {
      // Удаляем слушатель события скролла
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]); 
};

export default useInfiniteScroll;
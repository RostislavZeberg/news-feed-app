import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from './store';

// Это обертка над стандартным useDispatch, но с правильной типизацией для хранилища
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Создаем и экспортируем кастомный хук useAppSelector
// Это типизированная версия useSelector, связанная с RootState хранилища
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
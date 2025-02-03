// src/store/hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Типизированный useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

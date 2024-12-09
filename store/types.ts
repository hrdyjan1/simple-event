import { ThunkAction, Action } from '@reduxjs/toolkit';
import { store } from './store';

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export { type RootState, type AppDispatch, type AppThunk };

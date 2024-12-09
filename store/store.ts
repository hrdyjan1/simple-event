import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { SecureStorage } from '@/utils/SecureStorage';

import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { baseApi } from '@/api/baseApi';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './types';

const persistConfig: PersistConfig<ReturnType<typeof reducer>> = {
  version: 1,
  key: 'root',
  storage: SecureStorage,
};

const reducer = combineReducers({
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  devTools: __DEV__,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

const persistor = persistStore(store);
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor, useAppSelector };

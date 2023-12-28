import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import equipmentSlice from './equipmentSlice';
import storage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import rankSlice from './rankSlice';

const rootReducer = combineReducers({
  user: userSlice,
  equipment: equipmentSlice,
  rank: rankSlice,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['user', 'equipment', 'rank'],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

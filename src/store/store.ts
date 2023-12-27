import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import equipmentSlice from './equipmentSlice';
import storage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
  user: userSlice,
  equipment: equipmentSlice,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['user', 'equipment'],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

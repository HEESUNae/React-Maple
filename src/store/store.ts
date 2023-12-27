import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import equipmentSlice from './equipmentSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    equipment: equipmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

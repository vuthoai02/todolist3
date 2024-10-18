import { configureStore } from '@reduxjs/toolkit'
import { taskReducer } from './reducer';

export const store = configureStore({
  reducer: {
    taskReducer
  }
});

export type ROOTSTATE = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

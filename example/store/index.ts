import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
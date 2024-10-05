import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../api/userApi';

export default configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    userApi.middleware,
  ),
});
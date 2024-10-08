import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../api/userApi';
import { dataApi } from '../api/dataApi';
import authorizationReducer from './authorizationSlice';

export default configureStore({
  reducer: {
    user: authorizationReducer,
    [userApi.reducerPath]: userApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    userApi.middleware,
    dataApi.middleware,
  ),
});
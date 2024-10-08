import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/ru/data/v3/testmethods/' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'docs/login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
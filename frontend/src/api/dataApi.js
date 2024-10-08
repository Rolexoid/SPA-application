import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/ru/data/v3/testmethods/docs/userdocs/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().user;
      console.log(token);
      headers.set('x-auth', `${token}`);
      return headers;
    },
  }),
  tagTypes: ['Data'],
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => 'get',
      providesTags: ['Data'],
    }),
  }),
});

export const { useGetDataQuery } = dataApi;
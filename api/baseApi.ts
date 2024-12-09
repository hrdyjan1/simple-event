import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { handleAuthQueryStarted } from './handleAuthQueryStarted';
import { LoginUserQueryArg, UserResponse } from './apiTypes';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    loginUser: build.mutation<UserResponse, LoginUserQueryArg>({
      query: (credentials) => ({
        url: `/auth/native`,
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: handleAuthQueryStarted,
    }),
    getEvents: build.query<unknown, void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetEventsQuery} = baseApi;

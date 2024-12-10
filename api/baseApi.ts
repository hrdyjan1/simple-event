import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { handleAuthQueryStarted } from './handleAuthQueryStarted';
import { DashboardDetailQueryArg, DashboardDetailResponse, LoginUserQueryArg, UserResponse } from './apiTypes';

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
    getDashboardList: build.query<DashboardDetailResponse[], void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
    }),
    getDashboardDetail: build.query<DashboardDetailResponse, DashboardDetailQueryArg>({
      query: (params) => ({
        url: `/events/${params.id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetDashboardDetailQuery, useGetDashboardListQuery} = baseApi;

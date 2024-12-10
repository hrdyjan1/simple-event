import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { handleAuthQueryStarted } from './handleAuthQueryStarted';
import {
  DashboardGetDetailQueryArg,
  DashboardCreateDetailMutationArg,
  DashboardDetailResponse,
  LoginUserQueryArg,
  UserResponse,
} from './apiTypes';

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['dashboard'],
  baseQuery: baseQuery,
  endpoints: (build) => ({
    loginUser: build.mutation<UserResponse, LoginUserQueryArg>({
      query: (params) => ({
        url: `/auth/native`,
        method: 'POST',
        body: params,
      }),
      onQueryStarted: handleAuthQueryStarted,
    }),
    getDashboardList: build.query<DashboardDetailResponse[], void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
      providesTags: ['dashboard'],
    }),
    getDashboardDetail: build.query<DashboardDetailResponse, DashboardGetDetailQueryArg>({
      query: (params) => ({
        url: `/events/${params.id}`,
        method: 'GET',
      }),
    }),
    createDashboardDetail: build.mutation<
      DashboardDetailResponse,
      DashboardCreateDetailMutationArg
    >({
      query: (params) => ({
        url: `/events`,
        method: 'POST',
        body: params,
      }),
      invalidatesTags: ['dashboard'],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetDashboardDetailQuery,
  useGetDashboardListQuery,
  useCreateDashboardDetailMutation,
} = baseApi;

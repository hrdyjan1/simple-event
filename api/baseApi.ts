import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { handleAuthQueryStarted } from './handleAuthQueryStarted';
import {
  DashboardGetDetailQueryArg,
  DashboardCreateDetailMutationArg,
  DashboardDetailResponse,
  SignInUserQueryArg,
  UserResponse,
  SignUpUserQueryArg,
} from './apiTypes';

export const baseApi = createApi({
  reducerPath: 'api',
  tagTypes: ['dashboard'],
  baseQuery: baseQuery,
  endpoints: (build) => ({
    signInUser: build.mutation<UserResponse, SignInUserQueryArg>({
      query: (params) => ({
        url: `/auth/native`,
        method: 'POST',
        body: params,
      }),
      onQueryStarted: handleAuthQueryStarted,
    }),
    signUpUser: build.mutation<UserResponse, SignUpUserQueryArg>({
      query: (params) => ({
        url: `/auth/register`,
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
  useSignInUserMutation,
  useSignUpUserMutation,
  useGetDashboardDetailQuery,
  useGetDashboardListQuery,
  useCreateDashboardDetailMutation,
} = baseApi;

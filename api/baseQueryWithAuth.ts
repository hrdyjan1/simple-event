import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { API_CONSTANTS } from './apiConstants';
import { RootState } from '@/store/types';

const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: API_CONSTANTS.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;
    if (accessToken) {
      headers.set(API_CONSTANTS.AUTHORIZATION_HEADER_KEY, `Bearer ${accessToken}`);
    }
    headers.set(API_CONSTANTS.API_KEY_HEADER_KEY, API_CONSTANTS.API_KEY);
    return headers;
  },
});

export { baseQueryWithAuth };

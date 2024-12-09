import { resetAuth, setAccessToken, setUser } from '@/store/slices/auth';
import { baseQueryWithAuth } from './baseQueryWithAuth';
import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { RootState } from '@/store/types';
import { metaSchema, userSchema } from './apiSchema';
import { API_CONSTANTS } from './apiConstants';

const handleRefreshToken = async (api: BaseQueryApi, extraOptions: {}) => {
  const refreshToken = (api.getState() as RootState).auth.refreshToken;

  if (!refreshToken) {
    api.dispatch(resetAuth());
    return null;
  }

  const response = await baseQueryWithAuth(
    { url: '/auth/refresh-token', method: 'POST', body: { refreshToken } },
    api,
    extraOptions
  );

  const parsedData = userSchema.parse(response.data);
  const parsedMeta = metaSchema.parse(response.meta);
  const accessToken = parsedMeta.response?.headers.get(API_CONSTANTS.AUTHORIZATION_HEADER_KEY);

  if (parsedData && accessToken) {
    api.dispatch(setUser(parsedData));
    api.dispatch(setAccessToken(accessToken));
    return parsedData;
  } else {
    api.dispatch(resetAuth());
    return null;
  }
};

export { handleRefreshToken };

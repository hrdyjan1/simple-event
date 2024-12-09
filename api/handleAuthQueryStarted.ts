import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  TypedMutationOnQueryStarted,
} from '@reduxjs/toolkit/query';
import { setAccessToken, setRefreshToken } from '@/store/slices/auth';
import { metaSchema } from './apiSchema';
import { API_CONSTANTS } from './apiConstants';

const handleAuthQueryStarted: TypedMutationOnQueryStarted<
  unknown,
  unknown,
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
> = async (_, { dispatch, queryFulfilled }) => {
  try {
    const { meta } = await queryFulfilled;
    const parsedMeta = metaSchema.parse(meta);
    const accessToken = parsedMeta.response?.headers.get(API_CONSTANTS.AUTHORIZATION_HEADER_KEY);
    const refreshToken = parsedMeta.response?.headers.get(API_CONSTANTS.REFRESH_TOKEN_HEADER_KEY);

    if (accessToken && refreshToken) {
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  } catch (error) {
    console.error('Login failed', error);
  }
};

export { handleAuthQueryStarted };

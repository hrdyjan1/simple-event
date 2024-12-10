import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  TypedMutationOnQueryStarted,
} from '@reduxjs/toolkit/query';
import { setAccessToken, setRefreshToken } from '@/store/slices/auth';
import { API_CONSTANTS } from './apiConstants';
import { MetaType } from '@/types/MetaType';

const handleAuthQueryStarted: TypedMutationOnQueryStarted<
  unknown,
  unknown,
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>
> = async (_, { dispatch, queryFulfilled }) => {
  try {
    const { meta } = await queryFulfilled;

    // TODO: Why parse meta not work?
    const accessToken = (meta as MetaType)?.response?.headers.get(
      API_CONSTANTS.AUTHORIZATION_HEADER_KEY
    );
    const refreshToken = (meta as MetaType)?.response?.headers.get(
      API_CONSTANTS.REFRESH_TOKEN_HEADER_KEY
    );

    if (accessToken && refreshToken) {
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  } catch (error) {
    console.error('Login failed', error);
  }
};

export { handleAuthQueryStarted };

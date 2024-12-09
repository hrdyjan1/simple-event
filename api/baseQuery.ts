import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { baseQueryWithAuth } from './baseQueryWithAuth';
import { handleRefreshToken } from './handleRefreshToken';

const mutex = new Mutex();

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock();

  let result = await baseQueryWithAuth(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshData = await handleRefreshToken(api, extraOptions);
        if (refreshData) {
          result = await baseQueryWithAuth(args, api, extraOptions);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQueryWithAuth(args, api, extraOptions);
    }
  }

  return result;
};

export { baseQuery };

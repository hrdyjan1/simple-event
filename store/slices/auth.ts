import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: null | {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState['user'] | null>) => {
      state.user = action.payload;
    },
    resetAuth: (state) => {
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
    },
  },
});

const authReducer = authSlice.reducer;
const { resetAuth, setUser, setAccessToken, setRefreshToken } = authSlice.actions;

export { resetAuth, setUser, setAccessToken, setRefreshToken, authReducer };

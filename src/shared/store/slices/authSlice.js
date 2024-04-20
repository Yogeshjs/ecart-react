import { createSlice, createSelector } from '@reduxjs/toolkit';
import { loginUser } from 'shared/api/auth';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  userName: '',
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      const { token } = action.payload;
      return {
        isAuthenticated: true,
        token
      };
    },
    userLogout: () => {
      return initialState;
    },
    setLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    }
  }
});

export const isUserAuthenticated = createSelector(
  (store) => store.auth,
  (authSlice) => authSlice.isAuthenticated
);

export const isLoading = createSelector(
  (store) => store.auth,
  (authSlice) => authSlice.isLoading
);

export const { userLoginSuccess, userLogout, setLoading } = authSlice.actions;

export default authSlice.reducer;

export const loginUserAuth = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { is_authenticated, access_token } = await loginUser(data);

    if (is_authenticated) {
      localStorage.setItem('token', access_token);
      dispatch(userLoginSuccess(access_token));
    }
  } catch (error) {
    console.log(error);
  }
  dispatch(setLoading(false));
};

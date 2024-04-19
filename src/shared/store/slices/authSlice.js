import { createSlice, createSelector } from '@reduxjs/toolkit';
import { loginUser } from 'shared/api/auth';

const initialState = {
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
    }
  }
});

export const isUserAuthenticated = createSelector(
  (store) => store.auth,
  (authSlice) => authSlice.isAuthenticated
);

export const { userLoginSuccess, userLogout } = authSlice.actions;

export default authSlice.reducer;

export const loginUserAuth = (data) => async (dispatch) => {
  try {
    const { is_authenticated, access_token } = await loginUser(data);

    if (is_authenticated) {
      localStorage.setItem('token', access_token);
      dispatch(userLoginSuccess(access_token));
    }
  } catch (error) {
    console.log(error);
  }
};

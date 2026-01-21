import { ActionTypes } from "./action-types";

export const reduxAction = (payload: any, type: ActionTypes) => ({
  type,
  payload
});

export const clearUser = () => ({
  type: ActionTypes.CLEAR_USER,
});

export const login = (user: any, token: string) => ({
  type: ActionTypes.LOGIN,
  payload: { user, token },
});

export const setLoginLoading = (loading: boolean) => ({
  type: ActionTypes.LOGIN_LOADING,
  payload: loading,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const verifyOTP = (isVerified: boolean) => ({
  type: ActionTypes.OTP_VERIFICATION,
  payload: isVerified,
});

export const setOTPLoading = (loading: boolean) => ({
  type: ActionTypes.OTP_LOADING,
  payload: loading,
});

export default {};
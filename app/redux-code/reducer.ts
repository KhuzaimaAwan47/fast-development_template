import { ActionTypes } from "./action-types";

interface UserState {
  user: any;
  token: string | null;
  theme: string;
  isAuthenticated: boolean;
  loginLoading: boolean;
  otpLoading: boolean;
  isOTPVerified: boolean;
}

const initialState: UserState = {
  user: null,
  token: null,
  theme: 'light', // Always light theme
  isAuthenticated: false,
  loginLoading: false,
  otpLoading: false,
  isOTPVerified: false,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case ActionTypes.USER_DATA:
      return { ...state, user: action.payload };

    case ActionTypes.AUTH_TOKEN:
      return { ...state, token: action.payload };

    case ActionTypes.CLEAR_USER:
      return { ...state, user: null, isAuthenticated: false };

    case ActionTypes.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loginLoading: false,
      };

    case ActionTypes.LOGIN_LOADING:
      return { ...state, loginLoading: action.payload };

    case ActionTypes.OTP_VERIFICATION:
      return {
        ...state,
        isOTPVerified: action.payload,
        otpLoading: false,
      };

    case ActionTypes.OTP_LOADING:
      return { ...state, otpLoading: action.payload };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isOTPVerified: false,
      };

    default:
      return state;
  }
};



export default userReducer;




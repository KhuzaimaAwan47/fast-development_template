import { ActionTypes } from "./action-types";

const initialState = {
  user: null,
  token: null,
  theme: 'light', // Always light theme
};


const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.USER_DATA:
      return { ...state, user: action.payload };

    case ActionTypes.AUTH_TOKEN:
      return { ...state, token: action.payload };

    case ActionTypes.CLEAR_USER:
      return { ...state, user: null };

    case ActionTypes.LOGOUT:
      return { ...state, user: null, token: null };

    default:
      return state;
  }
};



export default userReducer;




import { ActionTypes } from "./action-types";

export const reduxAction = (payload: any, type: ActionTypes) => ({
  type,
  payload
});


export const clearUser = () => ({
  type: ActionTypes.CLEAR_USER,
});


export default {};
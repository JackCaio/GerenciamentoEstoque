import { USER_LOGIN } from "../actions";

const INITIAL_STATE = {
  auth: '',
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.key) {
    case USER_LOGIN:
      return { ...state, auth: action.token };
    default:
      return state;
  }
}

export default authReducer;
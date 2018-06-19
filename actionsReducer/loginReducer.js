import initialState from './initialState';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types'

export default (state = initialState.login, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        message: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        message: action.payload
      }
    default:
      return state
  }
};

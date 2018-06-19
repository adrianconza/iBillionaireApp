import initialState from './initialState';
import {
  LIST_INIT,
  LIST_SUCCESS,
  LIST_FAILURE,
} from './types'

export default (state = initialState.list, action) => {
  switch (action.type) {
    case LIST_INIT:
      return {
        ...state,
        list: [],
        message: null,
        loading: true
      }
    case LIST_SUCCESS:
      return {
        ...state,
        list: action.payload,
        message: null,
        loading: false
      }
    case LIST_FAILURE:
      return {
        ...state,
        list: [],
        message: action.payload,
        loading: false
      }
    default:
      return state
  }
};

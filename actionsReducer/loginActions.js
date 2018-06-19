import { createAction } from 'redux-actions'

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types'

import API from '../API'

export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailure = createAction(LOGIN_FAILURE)

export const login = (username, password) =>
  async (dispatch) => {
    const response = await API.login(username, password)
    if (response.status !== 200) {
      dispatch(loginFailure('Error de usuario o contraseña'))
      return
    }
    dispatch(loginSuccess(response.token))
  }

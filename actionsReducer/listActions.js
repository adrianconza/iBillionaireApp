import { createAction } from 'redux-actions'

import {
  LIST_INIT,
  LIST_SUCCESS,
  LIST_FAILURE,
} from './types'

import API from '../API'

export const listInit = createAction(LIST_INIT)
export const listSuccess = createAction(LIST_SUCCESS)
export const listFailure = createAction(LIST_FAILURE)

export const list = (token) =>
  async (dispatch) => {
    dispatch(listInit())
    const response = await API.list(token)
    if (response.status !== 200) {
      dispatch(listFailure('Error al obtener la lista'))
      return
    }
    dispatch(listSuccess(response))
  }

import { combineReducers } from 'redux'

import login from './loginReducer'
import list from './listReducer'

const rootReducer = combineReducers({
  login,
  list
})

export default rootReducer

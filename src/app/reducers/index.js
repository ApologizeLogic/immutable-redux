import { combineReducers } from 'redux-immutablejs'

import pageStatus from './pageStatus.js'
import routing from './routing.js'

export default combineReducers({
  pageStatus,
  routing,
})
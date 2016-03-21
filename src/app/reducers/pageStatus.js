import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import * as ActionTypes from '../actions'

const initialState = Immutable.fromJS({
  isFetching: true,
  selectedItemId: 0,
  appCurrentClass: 'show',
  showDetail: true,
})

export default createReducer(initialState, {
  [ActionTypes.REQUEST_JSON]: (pageStatus, action) => {
    pageStatus.merge({
      isFetching: true,
    })
  },

  [ActionTypes.RECIEVE_JSON]: (pageStatus, action) => {
    pageStatus.merge({
      isFetching: false,
      mdata: action.json,
    })
  },

  [ActionTypes.CHANGE_CLASS]: (pageStatus, action) => {
    console.log(pageStatus)
    pageStatus.merge({
      appCurrentClass: action.json,
    })
  },

})
import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implemented')
  },
  [types.FETCH_ALL_TUSKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TUSKLIST mutation should be implemented')
  },
  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutation should be implemented')
  },
  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation should be implemented')
  },
  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutation should be implemented')
  },
  [types.AUTH_LOGOUT] (state, payload) {
    throw new Error('AUTH_LOGOUT mutation should be implemented')
  }
}

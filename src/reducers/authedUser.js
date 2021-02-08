import {SET_AUTHED_USER} from '../actions/authedUser'

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.user;
    default :
      return state
  }
}
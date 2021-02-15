import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUser } from './users'
import { setAuthedUser } from './authedUser'
export const SET_INITIAL_DATA = "SET_INITIAL_DATA"

const AUTHED_USER = 'tylermcginnis'

export const handleSetInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ tweets, users }) => {
        dispatch(receiveTweets(tweets))
        dispatch(receiveUser(users))
        dispatch(setAuthedUser(AUTHED_USER))
        dispatch(hideLoading())
      })
  }
}
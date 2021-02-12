import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { getInitialData } from '../utils/api'
export const SET_INITIAL_DATA = "SET_INITIAL_DATA"

export const setInitialData = ({ tweets, users}) => {
  return {
    type: SET_INITIAL_DATA,
    tweets,
    users
  }
}

export const handleSetInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
  }
}
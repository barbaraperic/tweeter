import { saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const ADD_TWEET = "ADD_TWEET"

export const getTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

export const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export const handleAddTweet = ({ text, replyingTo}) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())

    return saveTweet({
      author: authedUser,
      text,
      replyingTo
    })
    .then((tweet) => dispatch(addTweet(tweet)))
    .then(() => hideLoading())
  }
}
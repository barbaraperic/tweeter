import { saveTweet, saveLikeToggle } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
export const RECEIVE_TWEETS = "RECEIVE_TWEETS"
export const ADD_TWEET = "ADD_TWEET"
export const TOGGLE_LIKE = "TOGGLE_LIKE"

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

export const handleAddTweet = ({ text, replyingTo }) => {
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

const toggleLike = ({ id, authedUser, hasLiked }) => {
  return {
    type: 'TOGGLE_LIKE',
    id,
    authedUser,
    hasLiked
  }
}

export const handleToggleLike = (info) => {
  return (dispatch, getState) => {
    dispatch(toggleLike(info))

    return saveLikeToggle(info)
    .catch((e) => {
      console.warn('There was an error', e)
      dispatch(toggleLike(info))
      alert('There was an error in liking the tweet. Try again.')
    })
  }
}
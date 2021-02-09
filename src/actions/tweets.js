export const RECEIVE_TWEETS = "GET_TWEETS"

export const getTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
} 
import { RECEIVE_TWEETS, TOGGLE_LIKE, ADD_TWEET } from '../actions/tweets'

export const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    case TOGGLE_LIKE :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true 
          ? state[action.id].likes.filter((uId) => uId !== action.authedUser)
          : state[action.id].likes.concat([action.authedUser])
        }
      }
    case ADD_TWEET :
      const { tweet } = action

      let replyingTo = {}
      if (tweet.replyingTo === null ) {
        replyingTo = {
          [tweet.replyingTo] : {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].concat([tweet.id])
          }
        }
      }
      
      return {
        ...state,
        [tweet.id]: tweet,
        ...replyingTo,
      }
    default : 
      return state
  }
}
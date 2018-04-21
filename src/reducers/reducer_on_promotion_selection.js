import { CHANGE_PROMOTION_STATE } from '../actions';

export default function(state = false, action){
  switch(action.type){
    case CHANGE_PROMOTION_STATE:
      return action.payload.flag;
    default:
      return state;
  }
}
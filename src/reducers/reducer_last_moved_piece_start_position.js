import { CHANGE_LAST_MOVED_PIECE_START_POSITION, EMITTED_NEW_START_POSITION } from '../actions';

export default function(state = null, action){
  switch(action.type){
    case CHANGE_LAST_MOVED_PIECE_START_POSITION:
      return action.payload;
    case EMITTED_NEW_START_POSITION:
      return action.payload;
    default:
      return state;
  }
}
import { CHANGE_LAST_MOVED_PIECE } from '../actions';

export default function(state = null, action){
  switch(action.type){
    case CHANGE_LAST_MOVED_PIECE:
      return action.payload.lastMovedPiece;
    default:
      return state;
  }
}
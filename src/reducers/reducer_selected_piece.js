import { SELECTED_PIECE_TO_MOVE, DESELECT_PIECE, MOVE_PIECE_TO_SQUARE } from '../actions';

export default function(state = null, action){
  switch(action.type){
    case SELECTED_PIECE_TO_MOVE:
      return action.payload;
    case DESELECT_PIECE:
      return null;
    case MOVE_PIECE_TO_SQUARE:
      return null;
    default:
      return state;
  }
}
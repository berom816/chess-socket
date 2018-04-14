import { FIND_PIECE_MOVES, DESELECT_PIECE, MOVE_PIECE_TO_SQUARE } from '../actions';

export default function(state = [], action){
  switch (action.type) {
    case FIND_PIECE_MOVES:
      return action.payload;
    case DESELECT_PIECE:
      return [];
    case MOVE_PIECE_TO_SQUARE:
      return [];
    default:
      return state;
  }
}
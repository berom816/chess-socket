import {combineReducers} from 'redux';
import ChessBoardReducer from './reducer_chess_board';
import TurnReducer from './reducer_turn';
import PieceMovesReducer from './reducer_piece_moves';
import PieceSelectedReducer from './reducer_selected_piece';
// import LastMovedPieceReducer from './reducer_last_moved_piece';

const rootReducer = combineReducers({
  chessBoard: ChessBoardReducer,
  turn: TurnReducer,
  pieceMoves: PieceMovesReducer,
  selectedPiece: PieceSelectedReducer,
  // lastMovedPiece: LastMovedPieceReducer
});

export default rootReducer;

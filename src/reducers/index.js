import {combineReducers} from 'redux';
import ChessBoardReducer from './reducer_chess_board';
import TurnReducer from './reducer_turn';
import PieceMovesReducer from './reducer_piece_moves';
import PieceSelectedReducer from './reducer_selected_piece';
import LastMovedPieceStartPositionReducer from './reducer_last_moved_piece_start_position';
// import LastMovedPieceEndPositionReducer from './reducer_last_moved_piece_end_position';

const rootReducer = combineReducers({
  chessBoard: ChessBoardReducer,
  turn: TurnReducer,
  pieceMoves: PieceMovesReducer,
  selectedPiece: PieceSelectedReducer,
  lastMovedPieceStartPosition: LastMovedPieceStartPositionReducer, 
  // lastMovedPieceEndPosition: LastMovedPieceEndPositionReducer
});

export default rootReducer;

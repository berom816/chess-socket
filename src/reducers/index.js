import {combineReducers} from 'redux';
import ChessBoardReducer from './reducer_chess_board';
import PieceMovesReducer from './reducer_piece_moves';
import PieceSelectedReducer from './reducer_selected_piece';

const rootReducer = combineReducers({
  chessBoard: ChessBoardReducer,
  pieceMoves: PieceMovesReducer,
  selectedPiece: PieceSelectedReducer
});

export default rootReducer;

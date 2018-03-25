import {combineReducers} from 'redux';
import ChessBoardReducer from './reducer_chess_board';

const rootReducer = combineReducers({
  chessBoard:ChessBoardReducer
});

export default rootReducer;

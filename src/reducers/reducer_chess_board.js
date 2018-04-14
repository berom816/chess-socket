import _ from 'lodash';
import positionsKey from './chessBoardPositions';
import piecesOnBoard from '../chessObjects/defaultGame';
import { MOVE_PIECE_TO_SQUARE } from '../actions';
import ChessPiece from '../chessObjects/chessPieces/chessPiece';

const chessBoard = {};

positionsKey.forEach((position,index)=>{
  function determineColor(positionValue){
    const halfFile = ['a', 'c', 'e', 'g'];
    const halfRank = ['1', '3', '5', '7'];

    let positionSplit = positionValue.split('');
    let file = positionSplit[0];
    let row = positionSplit[1];

    if(halfFile.includes(file) && halfRank.includes(row)){
      return 'dark';
    }else if(halfFile.includes(file) && !halfRank.includes(row)){
      return 'light';
    }else if(!halfFile.includes(file) && halfRank.includes(row)){
      return 'light';
    }else{
      return 'dark';
    }
  }

  chessBoard[position] = {
    position:position,
    color:determineColor(position),
    occupied:false,
    pieceOnSquare:null,
    // selectedPieceMoves:false
  }
})

_.forEach(piecesOnBoard, (value, key)=>{
  chessBoard[value.position].occupied = true;
  chessBoard[value.position].pieceOnSquare = value;
})

export {chessBoard};


export default function(state = chessBoard, action){
  switch(action.type){
    case MOVE_PIECE_TO_SQUARE:
      let newBoardState = {...state};
      let selectedPosition = action.payload.selectedPosition;
      let selectedPiecePosition = action.payload.selectedPiecePosition;
      
      newBoardState[selectedPosition].occupied = true;
      newBoardState[selectedPosition].pieceOnSquare = newBoardState[selectedPiecePosition].pieceOnSquare;
      
      newBoardState[selectedPiecePosition].occupied = false;
      newBoardState[selectedPiecePosition].pieceOnSquare = null;

      return newBoardState;
    default:
      return state;
  }
}

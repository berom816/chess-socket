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
      let selectedPiece = action.payload.selectedPiece;
      let selectedPiecePosition = selectedPiece.position;

      //check for castling, special move
      let selectedPostionPiece = newBoardState[selectedPosition].pieceOnSquare;
      if (selectedPiece.pieceName === 'king' && selectedPostionPiece && selectedPostionPiece.pieceName === 'rook' && selectedPostionPiece.pieceColor === selectedPiece.pieceColor){

        let kingPositionFile = selectedPiece.position.charAt(0);
        let kingPositionRank = selectedPiece.position.charAt(1);
        let selectedPositionFile = selectedPosition.charAt(0);

        if(kingPositionFile.charCodeAt(0) < selectedPositionFile.charCodeAt(0)){
          newBoardState['g' + kingPositionRank].occupied = true;
          newBoardState['g' + kingPositionRank].pieceOnSquare = selectedPiece;
          newBoardState['g' + kingPositionRank].pieceOnSquare.position = 'g' + kingPositionRank;
          newBoardState['g' + kingPositionRank].pieceOnSquare.moved = true;

          newBoardState['f' + kingPositionRank].occupied = true;
          newBoardState['f' + kingPositionRank].pieceOnSquare = newBoardState[selectedPosition].pieceOnSquare;
          newBoardState['f' + kingPositionRank].pieceOnSquare.position = 'f' + kingPositionRank;
          newBoardState['f' + kingPositionRank].pieceOnSquare.moved = true;
          
        }else{
          newBoardState['c' + kingPositionRank].occupied = true;
          newBoardState['c' + kingPositionRank].pieceOnSquare = selectedPiece;
          newBoardState['c' + kingPositionRank].pieceOnSquare.position = 'c' + kingPositionRank;
          newBoardState['c' + kingPositionRank].pieceOnSquare.moved = true;

          newBoardState['d' + kingPositionRank].occupied = true;
          newBoardState['d' + kingPositionRank].pieceOnSquare = newBoardState[selectedPosition].pieceOnSquare;
          newBoardState['d' + kingPositionRank].pieceOnSquare.position = 'd' + kingPositionRank;
          newBoardState['d' + kingPositionRank].pieceOnSquare.moved = true;
        }
        
        newBoardState[selectedPiecePosition].occupied = false;
        newBoardState[selectedPiecePosition].pieceOnSquare = null;

        newBoardState[selectedPosition].occupied = false;
        newBoardState[selectedPosition].pieceOnSquare = null;

        return newBoardState
      }
      
      newBoardState[selectedPosition].occupied = true;
      newBoardState[selectedPosition].pieceOnSquare = newBoardState[selectedPiecePosition].pieceOnSquare;
      newBoardState[selectedPosition].pieceOnSquare.position = selectedPosition;
      if (newBoardState[selectedPosition].pieceOnSquare.hasOwnProperty('moved')) {
        newBoardState[selectedPosition].pieceOnSquare.moved = true;
      }
      
      newBoardState[selectedPiecePosition].occupied = false;
      newBoardState[selectedPiecePosition].pieceOnSquare = null;

      return newBoardState;
    default:
      return state;
  }
}

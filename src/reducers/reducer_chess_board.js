import _ from 'lodash';
import positionsKey from './chessBoardPositions';
import piecesOnBoard from '../chessObjects/defaultGame';
import { MOVE_PIECE_TO_SQUARE, CHOOSE_PROMOTION_PIECE } from '../actions';
import ChessPiece from '../chessObjects/chessPieces/chessPiece';
import Queen from '../chessObjects/chessPieces/queen';
import Rook from '../chessObjects/chessPieces/rook';
import Knight from '../chessObjects/chessPieces/knight';
import Bishop from '../chessObjects/chessPieces/bishop';

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
      let { selectedPosition, selectedPiece } = action.payload;
      let selectedPiecePosition = selectedPiece.position;

      //check for castling, special move
      let selectedPositionPiece = newBoardState[selectedPosition].pieceOnSquare;
      if (selectedPiece.pieceName === 'king' && newBoardState[selectedPosition].occupied && selectedPositionPiece.pieceName === 'rook' && selectedPositionPiece.pieceColor === selectedPiece.pieceColor){
        let kingPositionFile = selectedPiece.position.charAt(0);
        let kingPositionRank = selectedPiece.position.charAt(1);
        let selectedPositionFile = selectedPosition.charAt(0);

        if(kingPositionFile.charCodeAt(0) < selectedPositionFile.charCodeAt(0)){
          let newSquare1 = newBoardState['g' + kingPositionRank];
          newSquare1.occupied = true;
          newSquare1.pieceOnSquare = selectedPiece;
          newSquare1.pieceOnSquare.position = 'g' + kingPositionRank;
          newSquare1.pieceOnSquare.moved = true;

          let newSquare2 = newBoardState['f' + kingPositionRank];
          newSquare2.occupied = true;
          newSquare2.pieceOnSquare = newBoardState[selectedPosition].pieceOnSquare;
          newSquare2.pieceOnSquare.position = 'f' + kingPositionRank;
          newSquare2.pieceOnSquare.moved = true;
        }else{
          let newSquare1 = newBoardState['c' + kingPositionRank];
          newSquare1.occupied = true;
          newSquare1.pieceOnSquare = selectedPiece;
          newSquare1.pieceOnSquare.position = 'c' + kingPositionRank;
          newSquare1.pieceOnSquare.moved = true;

          let newSquare2 = newBoardState['d' + kingPositionRank];
          newSquare2.occupied = true;
          newSquare2.pieceOnSquare = newBoardState[selectedPosition].pieceOnSquare;
          newSquare2.pieceOnSquare.position = 'd' + kingPositionRank;
          newSquare2.pieceOnSquare.moved = true;
        }
        
        newBoardState[selectedPiecePosition].occupied = false;
        newBoardState[selectedPiecePosition].pieceOnSquare = null;

        newBoardState[selectedPosition].occupied = false;
        newBoardState[selectedPosition].pieceOnSquare = null;

        return newBoardState
      }
      
      //check for en passant, special move
      let selectedPiecePositionFileCode = selectedPiecePosition.charAt(0).charCodeAt(0);
      let selectedPiecePositionRankCode = parseInt(selectedPiecePosition.charAt(1));
      let selectedPositionFileCode = selectedPosition.charAt(0).charCodeAt(0);
      let selectedPositionRankCode = parseInt(selectedPosition.charAt(1));
      if(selectedPiece.pieceName === 'pawn' && !newBoardState[selectedPosition].occupied){
        let onAdjacentFile = selectedPiecePositionFileCode + 1 === selectedPositionFileCode || selectedPiecePositionFileCode - 1 === selectedPositionFileCode;
        let onAdjacentRank = selectedPiecePositionRankCode + 1 === selectedPositionRankCode || selectedPiecePositionRankCode - 1 === selectedPositionRankCode;
        if(onAdjacentFile && onAdjacentRank){
          newBoardState[selectedPosition].occupied = true;
          newBoardState[selectedPosition].pieceOnSquare = newBoardState[selectedPiecePosition].pieceOnSquare;
          newBoardState[selectedPosition].pieceOnSquare.position = selectedPosition;

          newBoardState[selectedPiecePosition].occupied = false;
          newBoardState[selectedPiecePosition].pieceOnSquare = null;

          //capture en passant opponent pawn
          let capturedPosition = String.fromCharCode(selectedPositionFileCode) + selectedPiecePositionRankCode.toString();
          newBoardState[capturedPosition].occupied = false;
          newBoardState[capturedPosition].pieceOnSquare = null;

          return newBoardState;
        }
      }

      //normal capture and movement move
      newBoardState[selectedPosition].occupied = true;
      newBoardState[selectedPosition].pieceOnSquare = newBoardState[selectedPiecePosition].pieceOnSquare;
      newBoardState[selectedPosition].pieceOnSquare.position = selectedPosition;
      if (newBoardState[selectedPosition].pieceOnSquare.hasOwnProperty('moved')) {
        newBoardState[selectedPosition].pieceOnSquare.moved = true;
      }
      
      newBoardState[selectedPiecePosition].occupied = false;
      newBoardState[selectedPiecePosition].pieceOnSquare = null;

      return newBoardState;
    
    case CHOOSE_PROMOTION_PIECE:
      let newBoardState2 = {...state};
      let { pieceType: promotionPieceType, position: promotionPiecePosition, pieceColor: promotionPieceColor} = action.payload;

      let newPiece = null;
      if(promotionPieceType === 'queen'){
        newPiece = new Queen(promotionPieceColor, promotionPiecePosition);
      } else if (promotionPieceType === 'rook'){
        newPiece = new Rook(promotionPieceColor, promotionPiecePosition, true);
      } else if (promotionPieceType === 'knight'){
        newPiece = new Knight(promotionPieceColor, promotionPiecePosition);        
      } else{
        newPiece = new Bishop(promotionPieceColor, promotionPiecePosition);    
      }

      newBoardState2[promotionPiecePosition].pieceOnSquare = newPiece;
      return newBoardState2;

    default:
      return state;
  }
}

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PromotionSelection from './promotionSelection';
import ChessBoard from './chessBoard';
import { emitNewBoardState, emitNewStartPosition, emitNewEndPosition, emitNewTurn, emitLastMovedPiece } from '../actions';
import {socket} from '../App';
import _ from 'lodash';
import King from '../chessObjects/chessPieces/king';
import Queen from '../chessObjects/chessPieces/queen';
import Bishop from '../chessObjects/chessPieces/bishop'
import Knight from '../chessObjects/chessPieces/knight';
import Rook from '../chessObjects/chessPieces/rook';
import Pawn from '../chessObjects/chessPieces/pawn';
import defaultGameBoard from '../reducers/defaultGameBoard';

class Game extends Component{
  constructor(props){
    super(props);
    
  }

  render(){
    // console.log('happened')
    //emit new chess state to server
    let newBoardState = {
      chessBoard: this.props.chessBoard,
      turn: this.props.turn,
      lastMovedPieceStartPosition: this.props.lastMovedPieceStartPosition,
      lastMovedPieceEndPosition: this.props.lastMovedPieceEndPosition,
      lastMovedPiece: this.props.lastMovedPiece
    }
    socket.emit('switch turn', newBoardState);

    socket.on('switch turn', (newStateFromEmit)=>{
      //check if the current state already matches the new state emited from server, if so do not update
      let {chessBoard, turn, lastMovedPieceStartPosition, lastMovedPieceEndPosition, lastMovedPiece} = newStateFromEmit;
      
      let thisPropBoard = this.props.chessBoard;
      let thisPropTurn = this.props.turn;
      let thisPropStart = this.props.lastMovedPieceStartPosition;
      let thisPropEnd = this.props.lastMovedPieceEndPosition;
      let thisLastMove = this.props.lastMovedPiece;

      //function to convert chess board pieces on board into chess piece objects
      function convertToChessPieceObj(pieceOnSquare) {
        if (!pieceOnSquare) {
          return null;
        }
        switch (pieceOnSquare.pieceName) {
          case 'king':
            return new King(pieceOnSquare.pieceColor, pieceOnSquare.position, pieceOnSquare.moved);
          case 'queen':
            return new Queen(pieceOnSquare.pieceColor, pieceOnSquare.position);
          case 'bishop':
            return new Bishop(pieceOnSquare.pieceColor, pieceOnSquare.position);
          case 'knight':
            return new Knight(pieceOnSquare.pieceColor, pieceOnSquare.position);
          case 'rook':
            return new Rook(pieceOnSquare.pieceColor, pieceOnSquare.position, pieceOnSquare.moved);
          case 'pawn':
            return new Pawn(pieceOnSquare.pieceColor, pieceOnSquare.position, pieceOnSquare.moved);
          default:
            return null;
        }
      }

      // state emited from server is json format, have to convert into chess piece object
      _.forEach(chessBoard, (square) => {
        if (square.occupied) {
          square.pieceOnSquare = convertToChessPieceObj(square.pieceOnSquare);
        }
      })
      lastMovedPiece = convertToChessPieceObj(lastMovedPiece);

      // console.log('emit board', chessBoard);
      let propChessStateStringify = JSON.stringify(this.props.chessBoard);
      let emitChessStateStringify = JSON.stringify(chessBoard);
      let propLastMovedPieceStringify = JSON.stringify(this.props.lastMovedPiece);
      let emitLastMovedPieceStringify = JSON.stringify(lastMovedPiece);

      // console.log('chessboard same', propChessStateStringify == emitChessStateStringify);
      // console.log('turn same', turn == this.props.turn);
      // console.log('start position same', lastMovedPieceStartPosition == this.props.lastMovedPieceStartPosition);
      // console.log('end position same', lastMovedPieceEndPosition == this.props.lastMovedPieceEndPosition);
      // // console.log(`emit end ${last}`)
      // console.log('last moved same', lastMovedPiece == this.props.lastMovedPiece);
      // console.log('----------------------------------')
      let boardEqual = propChessStateStringify == emitChessStateStringify;
      let turnEqual = turn == this.props.turn;
      let startEqual = lastMovedPieceStartPosition == this.props.lastMovedPieceStartPosition;
      let endEqual = lastMovedPieceEndPosition == this.props.lastMovedPieceEndPosition;
      let lastMovedEqual = propLastMovedPieceStringify == emitLastMovedPieceStringify;

      //check if state already matches emitted state, if not matching, update state
      if (propChessStateStringify !== emitChessStateStringify && turn !== this.props.turn && lastMovedPieceStartPosition !== this.props.lastMovedPieceStartPosition && propLastMovedPieceStringify !== emitLastMovedPieceStringify){
      // if (turn !== this.props.turn){
        this.props.emitNewBoardState(chessBoard);
        this.props.emitNewStartPosition(lastMovedPieceStartPosition);
        this.props.emitLastMovedPiece(lastMovedPiece);
        this.props.emitNewTurn(turn);
        this.props.emitNewEndPosition(lastMovedPieceEndPosition);
      }
    })

    let promotionScreen = this.props.onPromotionSelection ? <PromotionSelection /> : null;

    return (
      <div className='game'>
        {promotionScreen}
        <ChessBoard/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { 
    onPromotionSelection: state.onPromotionSelection,
    chessBoard: state.chessBoard,
    turn: state.turn,
    lastMovedPieceStartPosition: state.lastMovedPieceStartPosition,
    lastMovedPieceEndPosition: state.lastMovedPieceEndPosition,
    lastMovedPiece: state.lastMovedPiece
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { emitNewBoardState, emitNewStartPosition, emitNewEndPosition, emitNewTurn, emitLastMovedPiece },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
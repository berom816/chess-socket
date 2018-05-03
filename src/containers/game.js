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
    console.log('happened')
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
      let propChessStateStringify = JSON.stringify(this.props.chessBoard);
      let emitChessStateStringify = JSON.stringify(newStateFromEmit.chessBoard);
      let propLastMovedPieceStringify = JSON.stringify(this.props.lastMovedPiece);
      let emitLastMovedPieceStringify = JSON.stringify(lastMovedPiece);
      
      //check if state already matches emitted state, if not matching, update state
      if (propChessStateStringify !== emitChessStateStringify && turn !== this.props.turn && lastMovedPieceStartPosition !== this.props.lastMovedPieceStartPosition && lastMovedPieceEndPosition !== this.props.lastMovedPieceEndPosition && propLastMovedPieceStringify !== emitLastMovedPieceStringify){
        //function to convert chess board pieces on board into chess piece objects
        function convertToChessPieceObj(pieceOnSquare){
          if(!pieceOnSquare){
            return null;
          }
          switch(pieceOnSquare.pieceName){
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
        _.forEach(chessBoard, (square)=>{
          if(square.occupied){
            square.pieceOnSquare = convertToChessPieceObj(square.pieceOnSquare);
          }
        })
        lastMovedPiece = convertToChessPieceObj(lastMovedPiece);
        
        this.props.emitNewBoardState(chessBoard);
        this.props.emitNewTurn(turn);
        this.props.emitNewStartPosition(lastMovedPieceStartPosition);
        this.props.emitNewEndPosition(lastMovedPieceEndPosition);
        this.props.emitLastMovedPiece(lastMovedPiece);
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition, changeLastMovedPieceEndPosition, changeLastMovedPiece, changePromotionState } from '../actions';
import {socket} from '../App';

class MoveSetSquare extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('before', this.props.lastMovedPieceEndPosition);
    this.props.changeLastMovedPieceStartPosition(this.props.selectedPiece.position);
    this.props.changeLastMovedPieceEndPosition(this.props.position, this.props.selectedPiece, this.props.chessBoard);
    this.props.changeLastMovedPiece(this.props.selectedPiece);
    this.props.movePieceToSquare(this.props.position, this.props.selectedPiece);
    //promotion
    if (this.props.selectedPiece.pieceName === 'pawn' && (this.props.position.charAt(1) === '1' || this.props.position.charAt(1) === '8')){
      this.props.changePromotionState(true);
      return;//don't switch turn yet
    }
    this.props.changeTurn();

    // console.log('moveset turn', this.props.turn);
    // console.log('moveset start', this.props.lastMovedPieceStartPosition);
    // console.log('moveset end', this.props.lastMovedPieceEndPosition);

    //emit new chess state to server
    // let newBoardState = {
    //   chessBoard: this.props.chessBoard,
    //   turn: this.props.turn,
    //   lastMovedPieceStartPosition: this.props.lastMovedPieceStartPosition,
    //   lastMovedPieceEndPosition: this.props.lastMovedPieceEndPosition,
    //   lastMovedPiece: this.props.lastMovedPiece
    // }
    // console.log('after', this.props.lastMovedPieceStartPosition);
    // socket.emit('switch turn', newBoardState);
  }

  render() {
    // console.log('happen moveset')
    return (
      <div className='move-set-square' onClick={this.handleClick}>
        {this.props.chessPiece ? this.props.chessPiece.pieceName : ''}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { 
    selectedPiece: state.selectedPiece,
    chessBoard: state.chessBoard,
    turn: state.turn,
    lastMovedPieceStartPosition: state.lastMovedPieceStartPosition, 
    lastMovedPieceEndPosition: state.lastMovedPieceEndPosition,
    lastMovedPiece: state.lastMovedPiece
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition, changeLastMovedPieceEndPosition, changeLastMovedPiece, changePromotionState }, 
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveSetSquare);
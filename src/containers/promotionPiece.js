import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { choosePromotionPiece, changePromotionState, changeTurn } from '../actions';
import { socket } from '../App';

class PromotionPiece extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.choosePromotionPiece(this.props.choice, this.props.turn, this.props.lastMovedPieceEndPosition);
    this.props.changePromotionState(false);
    this.props.changeTurn();

    //emit new chess state to server
    let newBoardState = {
      chessBoard: this.props.chessBoard,
      turn: this.props.turn,
      lastMovedPieceStartPosition: this.props.lastMovedPieceStartPosition,
      lastMovedPieceEndPosition: this.props.lastMovedPieceEndPosition,
      lastMovedPiece: this.props.lastMovedPiece
    }
    socket.emit('switch turn', newBoardState);
  }

  render(){
    return (
      <div className='promotion-piece' onClick={this.handleClick}>
        {this.props.choice}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { 
    chessBoard: state.chessBoard,
    turn: state.turn,
    lastMovedPieceEndPosition: state.lastMovedPieceEndPosition,
    lastMovedPieceStartPosition: state.lastMovedPieceStartPosition, 
    lastMovedPiece: state.lastMovedPiece
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ choosePromotionPiece, changePromotionState, changeTurn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionPiece);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition, changeLastMovedPieceEndPosition, changeLastMovedPiece, changePromotionState } from '../actions';

class MoveSetSquare extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeLastMovedPieceStartPosition(this.props.selectedPiece.position);
    this.props.changeLastMovedPieceEndPosition(this.props.position, this.props.selectedPiece, this.props.chessBoard);
    this.props.changeLastMovedPiece(this.props.selectedPiece);
    this.props.movePieceToSquare(this.props.position, this.props.selectedPiece);
    
    if (this.props.selectedPiece.pieceName === 'pawn' && (this.props.position.charAt(1) === '1' || this.props.position.charAt(1) === '8')){
      this.props.changePromotionState(true);
      return;
    }
    this.props.changeTurn();
  }

  render() {
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
    chessBoard: state.chessBoard
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition, changeLastMovedPieceEndPosition, changeLastMovedPiece, changePromotionState }, 
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveSetSquare);
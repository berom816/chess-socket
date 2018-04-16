import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition } from '../actions';

class MoveSetSquare extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeLastMovedPieceStartPosition(this.props.selectedPiece.position);
    this.props.movePieceToSquare(this.props.position, this.props.selectedPiece);
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
    selectedPiece: state.selectedPiece
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ movePieceToSquare, changeTurn, changeLastMovedPieceStartPosition }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveSetSquare);
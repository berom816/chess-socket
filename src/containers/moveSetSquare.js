import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movePieceToSquare } from '../actions';

class MoveSetSquare extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.movePieceToSquare(this.props.position, this.props.selectedPiecePosition);
    this.props.chessPiece.position = this.props.position;
  }

  render() {
    console.log('movesetsquare props chessPiece', this.props.chessPiece);
    return (
      <div className='move-set-square' onClick={this.handleClick}>
        {this.props.chessPiece ? this.props.chessPiece.pieceName : ''}
      </div>
    )
  }
}

function mapStateToProps(state){
  return { selectedPiecePosition: state.selectedPiecePosition };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ movePieceToSquare }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveSetSquare);
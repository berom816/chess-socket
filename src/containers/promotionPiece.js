import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { choosePromotionPiece, changePromotionState, changeTurn } from '../actions';

class PromotionPiece extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.choosePromotionPiece(this.props.choice, this.props.turnColor, this.props.endPostion);
    this.props.changePromotionState(false);
    this.props.changeTurn();
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
    turnColor: state.turn,
    endPostion: state.lastMovedPieceEndPosition
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ choosePromotionPiece, changePromotionState, changeTurn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PromotionPiece);


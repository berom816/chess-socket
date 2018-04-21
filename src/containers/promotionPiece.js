import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { choosePromotionPiece } from '../actions';

class PromotionPiece extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.choosePromotionPiece(this.props.choice);
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        {this.props.choice}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ choosePromotionPiece}, dispatch);
}

export default connect(mapDispatchToProps)(PromotionPiece);


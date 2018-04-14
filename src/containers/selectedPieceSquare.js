import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { deselectPiece } from '../actions';

class SelectedPieceSquare extends Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.deselectPiece();
  }

  render(){
    console.log(this.props.chessPiece);
    return (
      <div className='selected-piece-square' onClick={this.handleClick}>
        {this.props.chessPiece ? this.props.chessPiece.pieceName : ''}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deselectPiece}, dispatch)
}

export default connect(null, mapDispatchToProps)(SelectedPieceSquare);
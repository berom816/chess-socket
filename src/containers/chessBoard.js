import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardSquare from './boardSquare';
import notationsKey from '../reducers/chessBoardNotation';
import piecesOnBoard from '../objects/defaultGame';

class ChessBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(piecesOnBoard);
    return(
      <div className='chess-board'>
        {
            notationsKey.map((element)=>{
              return (
                <BoardSquare key={element} color={this.props.chessBoard[element].color} notation={this.props.chessBoard[element]['notation']}>

                </BoardSquare>
              )
            })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {chessBoard:state.chessBoard};
}

export default connect(mapStateToProps)(ChessBoard);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardSquare from './boardSquare';
import notationsKey from '../reducers/chessBoardNotation';

class ChessBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='chess-board'>
        {
            notationsKey.map((element)=>{
              return <BoardSquare color={this.props.chessBoard[element].color} notation={this.props.chessBoard[element]['notation']}/>
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

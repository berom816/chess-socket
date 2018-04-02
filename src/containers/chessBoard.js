import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardSquare from './boardSquare';
import positionsKey from '../reducers/chessBoardPositions';
import piecesOnBoard from '../objects/defaultGame';

class ChessBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // console.log(piecesOnBoard);
    return(
      <div className='chess-board'>
        {
            positionsKey.map((element)=>{
              console.log(element);
              // console.log(this.props.chessBoard[element].pieceOnSquare.pieceName);
              if(this.props.chessBoard[element].pieceOnSquare!==null){
                return (
                  <BoardSquare key={element} color={this.props.chessBoard[element].color} position={this.props.chessBoard[element]['position']} word={'testing'}>
                  {
                    this.props.chessBoard[element].pieceOnSquare.pieceName
                  }
                  </BoardSquare>
                )
              }else{
                return (
                  <BoardSquare key={element} color={this.props.chessBoard[element].color} position={this.props.chessBoard[element]['position']} word={'testing'}>
                  </BoardSquare>
                )
              }
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

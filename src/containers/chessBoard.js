import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChessPiece from './chessPiece';
import BoardSquare from './boardSquare';
import positionsKey from '../reducers/chessBoardPositions';
import piecesOnBoard from '../chessObjects/defaultGame';

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
            if(this.props.chessBoard[element].occupied){
              return (
                <BoardSquare key={element} color={this.props.chessBoard[element].color} position={this.props.chessBoard[element]['position']} word={'testing'}>
                  <ChessPiece chessPiece={this.props.chessBoard[element].pieceOnSquare}/>
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

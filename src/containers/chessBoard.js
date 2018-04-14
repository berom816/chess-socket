import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChessPiece from './chessPiece';
import BoardSquare from './boardSquare';
import MoveSetSquare from './moveSetSquare';
import SelectedPieceSquare from './selectedPieceSquare';
import positionsKey from '../reducers/chessBoardPositions';
import piecesOnBoard from '../chessObjects/defaultGame';

class ChessBoard extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='chess-board'>
        {
          positionsKey.map((position)=>{
            let squareTypeComponent = null;
            if (this.props.pieceMoveArr.includes(position)){
              squareTypeComponent = <MoveSetSquare chessPiece={this.props.chessBoard[position].pieceOnSquare} position={position} />;
            } else if (position === this.props.selectedPiecePosition){
              squareTypeComponent = <SelectedPieceSquare chessPiece={this.props.chessBoard[position].pieceOnSquare} />;
            } else if (this.props.chessBoard[position].occupied){
              squareTypeComponent = <ChessPiece chessPiece={this.props.chessBoard[position].pieceOnSquare} />;
            } else{
              squareTypeComponent = null;
            }

            return (
              <BoardSquare key={position} color={this.props.chessBoard[position].color} position={this.props.chessBoard[position]['position']}>
                {squareTypeComponent}
              </BoardSquare>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    chessBoard: state.chessBoard, 
    pieceMoveArr: state.pieceMoves,
    selectedPiecePosition: state.selectedPiecePosition
  };
}

export default connect(mapStateToProps)(ChessBoard);

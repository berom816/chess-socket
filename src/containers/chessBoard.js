import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChessPiece from './chessPiece';
import BoardSquare from './boardSquare';
import MoveSetSquare from './moveSetSquare';
import SelectedPieceSquare from './selectedPieceSquare';
import LastMovedStartSquare from '../components/lastMovedPieceStartSquare';
import LastMovedEndSquare from '../components/lastMovedPieceEndSquare';
import positionsKey from '../reducers/chessBoardPositions';
// import piecesOnBoard from '../chessObjects/defaultGame';

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
            } else if (this.props.selectedPiece !== null && position === this.props.selectedPiece.position){
              squareTypeComponent = <SelectedPieceSquare chessPiece={this.props.chessBoard[position].pieceOnSquare} />;
            } else if (this.props.lastMovedPieceEndPosition === position){
              squareTypeComponent = <LastMovedEndSquare boardSquare={this.props.chessBoard[position]}/>;
            } else if (this.props.lastMovedPieceStartPosition === position){
              squareTypeComponent = <LastMovedStartSquare />
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
    selectedPiece: state.selectedPiece, 
    lastMovedPieceStartPosition: state.lastMovedPieceStartPosition,
    lastMovedPieceEndPosition: state.lastMovedPieceEndPosition,
  };
}

export default connect(mapStateToProps)(ChessBoard);

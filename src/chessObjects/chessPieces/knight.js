import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Knight extends ChessPiece{
  constructor(pieceColor, position){
    super('knight', pieceColor, position);
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let file = this.position.charAt(0);
    let rank = parseInt(this.position.charAt(1));
    let fileCode = file.charCodeAt(0);

    if(fileCode + 1 <= 104 && rank + 2 <= 8){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank + 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 2 <= 104 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode + 2);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 2 <= 104 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode + 2);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 1 <= 104 && rank - 2 >= 1){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank - 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 1 >= 97 && rank - 2 >= 1){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank - 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 2 >= 97 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode - 2);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 2 >= 97 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode - 2);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 1 >= 97 && rank + 2 <= 8){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank + 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    return accessiblePositions;
  }
}

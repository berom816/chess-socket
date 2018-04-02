import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Knight extends ChessPiece{
  constructor(pieceColor, position){
    super('knight', pieceColor, position);
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitPosition = [...this.position]
    let file = splitPosition[0];
    let rank = parseInt(splitPosition[1]);
    let fileCode = file.charCodeAt(0);

    if(fileCode + 1 <= 104 && rank + 2 <= 8){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank + 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode + 2 <= 104 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode + 2);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode + 2 <= 104 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode + 2);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode + 1 <= 104 && rank - 2 >= 1){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank - 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode - 1 >= 97 && rank - 2 >= 1){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank - 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode - 2 >= 97 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode - 2);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode - 2 >= 97 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode - 2);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode - 1 >= 97 && rank + 2 <= 8){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank + 2;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    return accessiblePositions;
  }
}

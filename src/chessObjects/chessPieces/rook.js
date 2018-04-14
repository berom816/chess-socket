import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Rook extends ChessPiece{
  constructor(pieceColor, position){
    super('rook', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitPosition = [...this.position]
    let file = splitPosition[0];
    let rank = parseInt(splitPosition[1]);
    let checkNorth = true, checkSouth = true, checkWest = true, checkEast = true;
    let fileCode = file.charCodeAt(0);

    for(let i = 1; i <= Math.max(rank-1, 8-rank); i++){
      //get north moves
      if(rank + i <= 8 && checkNorth){
        let nRank = rank + i;
        checkNorth = checkSquare(chessBoardState, file + nRank, accessiblePositions, this.pieceColor);
      }

      //get south moves
      if(rank - i >= 1 && checkSouth){
        let nRank = rank - i;
        checkSouth = checkSquare(chessBoardState, file + nRank, accessiblePositions, this.pieceColor);
      }

      //get east moves
      if(fileCode + i <= 104 && checkEast){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        checkEast = checkSquare(chessBoardState, nFile + rank, accessiblePositions, this.pieceColor);
      }

      //get west moves
      if(fileCode - i >= 97 && checkWest){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        checkWest = checkSquare(chessBoardState, nFile + rank, accessiblePositions, this.pieceColor);
      }
    }

    return accessiblePositions;
  }
}

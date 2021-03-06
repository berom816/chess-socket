import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Queen extends ChessPiece{
  constructor(pieceColor, position){
    super('queen', pieceColor, position);
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let file = this.position.charAt(0);
    let rank = parseInt(this.position.charAt(1));
    let checkNorth = true, checkSouth = true, checkWest = true, checkEast = true;
    let checkNW = true, checkNE = true, checkSW = true, checkSE = true;
    let fileCode = file.charCodeAt(0);

    for(let i = 1; i <= Math.max(rank - 1, 8 - rank, fileCode - 97, 104 - fileCode); i++){
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

      //check northwest moves
      if(rank + i <= 8 && fileCode - i >= 97 && checkNW){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        let nRank = rank + i;

        checkNW = checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
      }

      //check northeast moves
      if(rank + i <= 8 && fileCode + i <= 104 && checkNE){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        let nRank = rank + i;

        checkNE = checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
      }

      //check southwest moves
      if(rank - i >= 1 && fileCode - i >= 97 && checkSW){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        let nRank = rank - i;

        checkSW = checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
      }

      //check southeast moves
      if(rank - i >= 1 && fileCode + i <= 104 && checkSE){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        let nRank = rank - i;

        checkSE = checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
      }
    }

    return accessiblePositions;
  }
}

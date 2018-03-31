import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Queen extends ChessPiece{
  constructor(pieceColor, position){
    super('queen', pieceColor, position);
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitNotation = [...this.position]
    let file = splitNotation[0];
    let rank = parseInt(splitNotation[1]);
    let checkNorth = true, checkSouth = true, checkWest = true, checkEast = true;
    let checkNW = true, checkNE = true, checkSW = true, checkSE = true;
    let fileCode = file.charCodeAt(0);

    for(let i = 1; i <= Math.max(rank - 1, 8 - rank); i++){
      //get north moves
      if(rank + i <= 8 && checkNorth){
        let nRank = rank + i;
        checkSquare(chessBoardState, file + nRank, accessiblePositions, checkNorth);
      }

      //get south moves
      if(rank - i >= 1 && checkSouth){
        let nRank = rank - i;
        checkSquare(chessBoardState, file + nRank, accessiblePositions, checkSouth);
      }

      //get east moves
      if(fileCode + i <= 104 && checkEast){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        checkSquare(chessBoardState, nFile + rank, accessiblePositions, checkEast);
      }

      //get west moves
      if(fileCode - i >= 97 && checkWest){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        checkSquare(chessBoardState, nFile + rank, accessiblePositions, checkWest);
      }

      //check northwest moves
      if(rank + i <= 8 && fileCode - i >= 97 && checkNW){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        let nRank = rank + i;

        checkSquare(chessBoardState, nFile + nRank, accessiblePositions, checkNW);
      }

      //check northeast moves
      if(rank + i <= 8 && fileCode + i <= 104 && checkNE){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        let nRank = rank + i;

        checkSquare(chessBoardState, nFile + nRank, accessiblePositions, checkNE);
      }

      //check southwest moves
      if(rank - i >= 1 && fileCode - i >= 97 && checkSW){ //file greater than equal to 'a' file
        let nFile = String.fromCharCode(fileCode - i);
        let nRank = rank - i;

        checkSquare(chessBoardState, nFile + nRank, accessiblePositions, checkSW);
      }

      //check southeast moves
      if(rank - i >= 1 && fileCode - i <= 104 && checkSE){ //file less than equal to 'h' file
        let nFile = String.fromCharCode(fileCode + i);
        let nRank = rank - i;

        checkSquare(chessBoardState, nFile + nRank, accessiblePositions, checkSE);
      }
    }

    return accessiblePositions;
  }
}

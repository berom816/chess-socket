import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class Bishop extends ChessPiece{
  constructor(pieceColor, position){
    super('bishop', pieceColor, position);
  }

  move(chessBoardState){
    let accessiblePositions = [];

    // let splitPosition = [...this.position]
    // let file = splitPosition[0];
    let file = this.position.charAt(0);
    let rank = parseInt(this.position.charAt(1));

    let checkNW = true, checkNE = true, checkSW = true, checkSE = true;
    let lowEnd = rank - 1;
    let highEnd = 8 - rank;
    let fileCode = file.charCodeAt(0);

    for(let i = 1; i <= Math.max(lowEnd, highEnd); i++){
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

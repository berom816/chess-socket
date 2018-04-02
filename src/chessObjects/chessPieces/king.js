import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class King extends ChessPiece{
  constructor(pieceColor, position){
    super('king', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitPosition = [...this.position]
    let file = splitPosition[0];
    let rank = parseInt(splitPosition[1]);
    let fileCode = file.charCodeAt(0);

    if(rank + 1 <= 8){
      let nRank = rank + 1;

      checkSquare(chessBoardState, file + nRank, accessiblePositions, false);
    }

    if(fileCode + 1 <= 104 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank + 1;
      
      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode + 1 <= 104){
      let nFile = String.fromCharCode(fileCode + 1);
      
      checkSquare(chessBoardState, nFile + rank, accessiblePositions, false);
    }

    if(fileCode + 1 <= 104 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(rank - 1 >= 1){
      let nRank = rank - 1;

      checkSquare(chessBoardState, file + nRank, accessiblePositions, false);
    }

    if(fileCode - 1 >= 97 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    if(fileCode - 1 >= 97){
      let nFile = String.fromCharCode(fileCode - 1);

      checkSquare(chessBoardState, nFile + rank, accessiblePositions, false);
    }

    if(fileCode - 1 >= 97 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, false);
    }

    //check for castling
    if(!this.moved){
      let rookSquare1 = 'a'+ rank.toString();
      let rookSquare2 = 'h'+ rank.toString();

      if(chessBoardState[rookSquare1].occupied && chessBoardState[rookSquare1].pieceOnSquare.pieceColor === this.pieceColor && !chessBoardState[rookSquare1].pieceOnSquare.moved){
        let noPieceBetween = true;
        for(let j = 0; j < fileCode - 97; j++){
          if(chessBoardState[String.fromCharCode(fileCode - j) + rank].occupied){
            noPieceBetween = false;
            break;
          }
        }

        if(noPieceBetween){
          accessiblePositions.push(rookSquare1);
        }
      }

      if(chessBoardState[rookSquare2].occupied && chessBoardState[rookSquare2].pieceOnSquare.pieceColor === this.pieceColor && !chessBoardState[rookSquare2].pieceOnSquare.moved){
        let noPieceBetween = true;
        for(let j = 0; j < 104 - fileCode; j++){
          if(chessBoardState[String.fromCharCode(fileCode + j) + rank].occupied){
            noPieceBetween = false;
            break;
          }
        }

        if(noPieceBetween){
          accessiblePositions.push(rookSquare2);
        }
      }
    }

    return accessiblePositions;
  }
}

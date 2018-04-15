import ChessPiece from './chessPiece';
import checkSquare from './pieceMovesHelper';

export default class King extends ChessPiece{
  constructor(pieceColor, position){
    super('king', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let file = this.position.charAt(0);
    let rank = parseInt(this.position.charAt(1));
    let fileCode = file.charCodeAt(0);

    if(rank + 1 <= 8){
      let nRank = rank + 1;

      checkSquare(chessBoardState, file + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 1 <= 104 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank + 1;
      
      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 1 <= 104){
      let nFile = String.fromCharCode(fileCode + 1);
      
      checkSquare(chessBoardState, nFile + rank, accessiblePositions, this.pieceColor);
    }

    if(fileCode + 1 <= 104 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode + 1);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(rank - 1 >= 1){
      let nRank = rank - 1;

      checkSquare(chessBoardState, file + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 1 >= 97 && rank - 1 >= 1){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank - 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 1 >= 97){
      let nFile = String.fromCharCode(fileCode - 1);

      checkSquare(chessBoardState, nFile + rank, accessiblePositions, this.pieceColor);
    }

    if(fileCode - 1 >= 97 && rank + 1 <= 8){
      let nFile = String.fromCharCode(fileCode - 1);
      let nRank = rank + 1;

      checkSquare(chessBoardState, nFile + nRank, accessiblePositions, this.pieceColor);
    }

    //check for castling
    if(!this.moved){
      let rookSquare1 = 'a'+ rank.toString();
      let rookSquare2 = 'h'+ rank.toString();

      if(chessBoardState[rookSquare1].occupied && chessBoardState[rookSquare1].pieceOnSquare.pieceColor === this.pieceColor && !chessBoardState[rookSquare1].pieceOnSquare.moved){
        let noPieceBetween = true;
        for(let j = 98; j < fileCode; j++){
          if(chessBoardState[String.fromCharCode(j) + rank].occupied){
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
        for(let j = fileCode + 1; j < 104; j++){
          if(chessBoardState[String.fromCharCode(j) + rank].occupied){
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

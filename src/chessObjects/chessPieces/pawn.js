import ChessPiece from './chessPiece';

export default class Pawn extends ChessPiece{
  constructor(pieceColor, position, moved = false){
    super('pawn', pieceColor, position);
    this.moved = moved;
  }

  move(chessBoardState, lastMovedPiece, lastMovedPieceStartPosition, lastMovedPieceEndPosition){
    let accessiblePositions = [];

    let file = this.position.charAt(0);
    let fileCode = file.charCodeAt(0);
    let rank = parseInt(this.position.charAt(1));

    let blocking = false;

    let nRank = this.pieceColor === 'white' ? rank + 1 : rank - 1; 
    if(nRank >= 1 && nRank <= 8){
      let nPosition = file + nRank;
      
      if (!chessBoardState[nPosition].occupied){
        accessiblePositions.push(nPosition);
      }else{
        blocking = true;
      }
    }

    if(!this.moved && !blocking){
      let nRank = this.pieceColor === 'white' ? rank + 2 : rank - 2;

      let nPosition = file + nRank;
      if (!chessBoardState[nPosition].occupied){
        accessiblePositions.push(nPosition);
      }
    }
    
    let nFileCode = fileCode + 1;
    if(nFileCode >= 97 && nFileCode <= 104){
      let nPosition = String.fromCharCode(nFileCode) + nRank;
      
      if (chessBoardState[nPosition].occupied && chessBoardState[nPosition].pieceOnSquare.pieceColor !== this.pieceColor){
        accessiblePositions.push(nPosition);        
      }
    }

    let nFileCode2 = fileCode - 1;
    if(nFileCode2 >= 97 && nFileCode2 <= 104){
      let nPosition = String.fromCharCode(nFileCode2) + nRank;

      if (chessBoardState[nPosition].occupied && chessBoardState[nPosition].pieceOnSquare.pieceColor !== this.pieceColor) {
        accessiblePositions.push(nPosition);
      }
    }

    if (lastMovedPiece && lastMovedPieceStartPosition && lastMovedPieceEndPosition){
      //check for en passant, special move
      if (lastMovedPiece.pieceName === 'pawn' && lastMovedPiece.pieceColor !== this.pieceColor){
        //check for double square move and opponent 
        let startPositionFile = lastMovedPieceStartPosition.charAt(0);
        let startPositionRank = parseInt(lastMovedPieceStartPosition.charAt(1));
        let endPositionFile = lastMovedPieceEndPosition.charAt(0);
        let endPositionRank = parseInt(lastMovedPieceEndPosition.charAt(1));

        if(Math.abs(startPositionRank - endPositionRank) === 2){//a double square move
          let endPositionFileCode = endPositionFile.charCodeAt(0);
          if ((fileCode + 1 === endPositionFileCode || fileCode - 1 === endPositionFileCode) && endPositionRank === rank){//last moved piece next to current selected pawn
            let selectedPieceEndPosRank = this.pieceColor === 'white' ? endPositionRank + 1 : endPositionRank - 1;
            accessiblePositions.push(endPositionFile + selectedPieceEndPosRank.toString());
          }
        }
      }
    }

    return accessiblePositions;
  }
}

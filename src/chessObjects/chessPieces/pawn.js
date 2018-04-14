import ChessPiece from './chessPiece';

export default class Pawn extends ChessPiece{
  constructor(pieceColor, position){
    super('pawn', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitPosition = [...this.position]
    let file = splitPosition[0];
    let rank = parseInt(splitPosition[1]);
    let fileCode = file.charCodeAt(0);

    if(!this.moved){
      let nRank = this.pieceColor === 'white' ? rank + 2 : rank - 2;

      let nPosition = file + nRank;
      if (!chessBoardState[nPosition].occupied){
        accessiblePositions.push(nPosition);
      }
    }
    
    let nRank = this.pieceColor === 'white' ? rank + 1 : rank - 1; 
    if(nRank >= 1 && nRank <= 8){
      let nPosition = file + nRank;
      
      if (!chessBoardState[nPosition].occupied) {
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

    return accessiblePositions;
  }
}

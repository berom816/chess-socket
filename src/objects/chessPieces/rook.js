import ChessPiece from './chessPiece';

export default class Rook extends ChessPiece{
  constructor(pieceColor, position){
    super('rook', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){
    let accessiblePositions = [];

    let splitNotation = [...this.position]
    file = splitNotation[0];
    rank = parseInt(splitNotation[1]);

    // //check north moves
    // for(let a = rank; a<=8; a++){
    //   if(!chessBoardState[file+(a.toString())].occupied){
    //     if(chessBoardState[file+(a.toString())].pieceOnSquare.pieceColor !== this.pieceColor){
    //       accessiblePositions.push(chessBoardState[file+(a.toString())].position);
    //     }
    //     break();
    //   }else{
    //     accessiblePositions.push(chessBoardState[file+(a.toString())].position);
    //   }
    // }
    //
    // //check north moves
    // for(let a = rank; a>=1; a--){
    //   if(!chessBoardState[file+(a.toString())].occupied){
    //     if(chessBoardState[file+(a.toString())].pieceOnSquare.pieceColor !== this.pieceColor){
    //       accessiblePositions.push(chessBoardState[file+(a.toString())].position);
    //     }
    //     break();
    //   }else{
    //     accessiblePositions.push(chessBoardState[file+(a.toString())].position);
    //   }
    // }

    for(let a = 0; a <Math.max(rank, (8-rank)); a++){//rook's file moves and rank moves are same amount on either side
      if(rank + a <= 8){
        if(!chessBoardState[file+((rank+a).toString())].occupied){
          if(chessBoardState[file+((rank+a).toString())].pieceOnSquare.pieceColor !== this.pieceColor){
            accessiblePositions.push(chessBoardState[file+((rank+a).toString())].position);
          }
        }else{
            accessiblePositions.push(chessBoardState[file+((rank+a).toString())].position);
        }
      }

      if(rank - a >= 1){
        if(!chessBoardState[file+((rank-a).toString())].occupied){
          if(chessBoardState[file+((rank-a).toString())].pieceOnSquare.pieceColor !== this.pieceColor){
            accessiblePositions.push(chessBoardState[file+((rank-a).toString())].position);
          }
        }else{
            accessiblePositions.push(chessBoardState[file+((rank-a).toString())].position);
        }
      }

      if(file.charCodeAt(0) + a <= 104){
        let nFile = String.fromCharCode(file.charCodeAt(0) + a);
        if(!chessBoardState[nFile+rank].occupied){
          if(chessBoardState[nFile+rank].pieceOnSquare.pieceColor !== this.pieceColor){
            accessiblePositions.push(chessBoardState[nFile+rank].position);
          }
        }else{
            accessiblePositions.push(chessBoardState[nFile+rank].position);
        }
      }

      if(file.charCodeAt(0) - a >= 97){
        let nFile = String.fromCharCode(file.charCodeAt(0) - a);
        if(!chessBoardState[nFile+rank].occupied){
          if(chessBoardState[nFile+rank].pieceOnSquare.pieceColor !== this.pieceColor){
            accessiblePositions.push(chessBoardState[nFile+rank].position);
          }
        }else{
            accessiblePositions.push(chessBoardState[nFile+rank].position);
        }
      }
    }
  }
}

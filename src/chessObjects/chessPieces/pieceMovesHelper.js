export default function checkSquare(chessBoard, position, accessibleArr, checkDirection){
  if(chessBoard[position].occupied){
    if(chessBoard[position].pieceOnSquare.pieceColor !== this.pieceColor){
      accessibleArr.push(chessBoard[position].position);
    }
    checkDirection = false;
  }else{
      accessibleArr.push(chessBoard[position].position);
  }
}

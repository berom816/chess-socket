export default function checkSquare(chessBoard, position, accessibleArr, selectedPieceColor){
  if(chessBoard[position].occupied){
    if(chessBoard[position].pieceOnSquare.pieceColor !== selectedPieceColor){
      accessibleArr.push(chessBoard[position].position);
    }
    return false; //stop checking this direction of moves
  }else{
    accessibleArr.push(chessBoard[position].position);
    return true; //keep checking this direction of moves
  }
}

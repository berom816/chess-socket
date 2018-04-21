import { CHANGE_LAST_MOVED_PIECE_END_POSITION } from '../actions';

export default function(state = null, action){
  switch(action.type){
    case CHANGE_LAST_MOVED_PIECE_END_POSITION:
      let selectedPosition = action.payload.selectedPosition;
      let selectedPiece = action.payload.selectedPiece;
      let chessBoard = action.payload.chessBoard;

      //check if castling, special move
      if (selectedPiece.pieceName === 'king' && chessBoard[selectedPosition].occupied && chessBoard[selectedPosition].pieceOnSquare.pieceName === 'rook' && chessBoard[selectedPosition].pieceOnSquare.pieceColor === selectedPiece.pieceColor){
        let kingPositionFile = selectedPiece.position.charAt(0);
        let kingPositionRank = selectedPiece.position.charAt(1);
        let selectedPositionFile = selectedPosition.charAt(0);

        if (kingPositionFile.charCodeAt(0) < selectedPositionFile.charCodeAt(0)) {
          return 'g' + kingPositionRank; 
        } else {
          return 'c' + kingPositionRank;
        }
      }
      return selectedPosition;
    default:
      return state;
  }
}
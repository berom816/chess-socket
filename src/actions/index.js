export const CHOOSE_PIECE_TO_MOVE = 'CHOOSE_PIECE_TO_MOVE';

export function choosePieceToMove(chessPiece){
	return {
		type: CHOOSE_PIECE_TO_MOVE, 
		payload: chessPiece
	}
}
export const SELECTED_PIECE_TO_MOVE = 'SELECTED_PIECE_TO_MOVE';
export const FIND_PIECE_MOVES = 'FIND_PIECE_MOVES';
export const DESELECT_PIECE = 'DESELECT_PIECE';
export const MOVE_PIECE_TO_SQUARE = 'MOVE_PIECE_TO_SQUARE';
export const CHANGE_TURN = 'CHANGE_TURN';

export function choosePieceToMove(chessPiece){
	return {
		type: SELECTED_PIECE_TO_MOVE,
		payload: chessPiece
	}
}

export function getPieceMoves(chessPiece, chessBoardState){
	return {
		type: FIND_PIECE_MOVES, 
		payload: chessPiece.move(chessBoardState)
	}
}

export function deselectPiece(){
	return {
		type: DESELECT_PIECE,
		payload: null
	}
}

export function movePieceToSquare(selectedPosition, selectedPiece){
	return {
		type: MOVE_PIECE_TO_SQUARE,
		payload: {
			selectedPosition,
			selectedPiece
		}
	}
}

export function changeTurn(){
	return {
		type: CHANGE_TURN,
		payload: null
	}
}
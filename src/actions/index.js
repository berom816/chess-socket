export const SELECTED_PIECE_TO_MOVE = 'SELECTED_PIECE_TO_MOVE';
export const FIND_PIECE_MOVES = 'FIND_PIECE_MOVES';
export const DESELECT_PIECE = 'DESELECT_PIECE';
export const MOVE_PIECE_TO_SQUARE = 'MOVE_PIECE_TO_SQUARE';
export const CHANGE_TURN = 'CHANGE_TURN';
export const CHANGE_LAST_MOVED_PIECE_START_POSITION = 'CHANGE_LAST_MOVED_PIECE_START_POSITION';
export const CHANGE_LAST_MOVED_PIECE_END_POSITION = 'CHANGE_LAST_MOVED_PIECE_END_POSITION';
export const CHANGE_LAST_MOVED_PIECE = 'CHANGE_LAST_MOVED_PIECE';
export const CHANGE_PROMOTION_STATE = 'CHANGE_PROMOTION_STATE';
export const CHOOSE_PROMOTION_PIECE = 'CHOOSE_PROMOTION_PIECE';

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

export function changeLastMovedPieceStartPosition(startPosition){
	return {
		type: CHANGE_LAST_MOVED_PIECE_START_POSITION, 
		payload: startPosition
	}
}

export function changeLastMovedPieceEndPosition(selectedPosition, selectedPiece, chessBoard) {
	return {
		type: CHANGE_LAST_MOVED_PIECE_END_POSITION,
		payload: {
			selectedPosition, 
			selectedPiece, 
			chessBoard
		}
	}
}

export function changeLastMovedPiece(lastMovedPiece){
	return {
		type: CHANGE_LAST_MOVED_PIECE,
		payload:{
			lastMovedPiece
		}
	}
}

export function changePromotionState(flag){
	return {
		type:CHANGE_PROMOTION_STATE,
		payload:{
			flag
		}
	}
}

export function choosePromotionPiece(pieceType){
	return {
		type:CHOOSE_PROMOTION_PIECE,
		payload:{
			pieceType
		}
	}
}
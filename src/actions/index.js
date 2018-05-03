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
export const EMITTED_NEW_BOARD_STATE = 'EMITTED_NEW_BOARD_STATE';
export const EMITTED_NEW_START_POSITION = 'EMITTED_NEW_START_POSITION';
export const EMITTED_NEW_END_POSITION = 'EMITTED_NEW_END_POSITION';
export const EMITTED_NEW_TURN = 'EMITTED_NEW_TURN';
export const EMITTED_LAST_MOVED_PIECE = 'EMITTED_LAST_MOVED_PIECE';

export function choosePieceToMove(chessPiece){
	return {
		type: SELECTED_PIECE_TO_MOVE,
		payload: chessPiece
	}
}

export function getPieceMoves(chessPiece, chessBoardState, lastMovedPiece, lastMovedPieceStartPosition, lastMovedPieceEndPosition){
	return {
		type: FIND_PIECE_MOVES, 
		payload: chessPiece.move(chessBoardState, lastMovedPiece, lastMovedPieceStartPosition, lastMovedPieceEndPosition)
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
	// let endPosition = null;
	// if (selectedPiece.pieceName === 'king' && chessBoard[selectedPosition].occupied && chessBoard[selectedPosition].pieceOnSquare.pieceName === 'rook' && chessBoard[selectedPosition].pieceOnSquare.pieceColor === selectedPiece.pieceColor) {
	// 	let kingPositionFile = selectedPiece.position.charAt(0);
	// 	let kingPositionRank = selectedPiece.position.charAt(1);
	// 	let selectedPositionFile = selectedPosition.charAt(0);

	// 	endPosition = (kingPositionFile.charCodeAt(0) < selectedPositionFile.charCodeAt(0)) ? 'g' + kingPositionRank : 'c' + kingPositionRank;
	// }else{
	// 	endPosition = selectedPosition;
	// }

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
		payload: lastMovedPiece
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

export function choosePromotionPiece(pieceType, pieceColor, position){
	//might have to check if it's current player's turn to able to choose promotion piece
	return {
		type:CHOOSE_PROMOTION_PIECE,
		payload:{
			pieceType,
			pieceColor, 
			position
		}
	}
}

export function emitNewBoardState(newBoardState){
	return {
		type: EMITTED_NEW_BOARD_STATE,
		payload: newBoardState
	}
}

export function emitNewStartPosition(newStartPosition) {
	return {
		type: EMITTED_NEW_START_POSITION,
		payload: newStartPosition
	}
}

export function emitNewEndPosition(newEndPosition) {
	return {
		type: EMITTED_NEW_END_POSITION,
		payload: newEndPosition
	}
}

export function emitNewTurn() {
	return {
		type: EMITTED_NEW_TURN,
		payload: null
	}
}

export function emitLastMovedPiece(chessPiece) {
	return {
		type: EMITTED_LAST_MOVED_PIECE,
		payload: chessPiece
	}
}
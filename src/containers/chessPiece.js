import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getPieceMoves , choosePieceToMove } from '../actions';

class ChessPiece extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		if(this.props.chessPiece.pieceColor !== this.props.turn){
			return;
		}
		this.props.choosePieceToMove(this.props.chessPiece);
		this.props.getPieceMoves(this.props.chessPiece, this.props.chessBoard, this.props.lastMovedPiece, this.props.lastMovedPieceStartPosition, this.props.lastMovedPieceEndPosition);
	}

	render(){
		return(
			<div className='chess-piece' onClick={this.handleClick}>
				{this.props.chessPiece.pieceColor}
				<br/>
				{this.props.chessPiece.pieceName}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		chessBoard: state.chessBoard, 
		turn: state.turn,
		lastMovedPiece: state.lastMovedPiece, 
		lastMovedPieceStartPosition: state.lastMovedPieceStartPosition,
		lastMovedPieceEndPosition: state.lastMovedPieceEndPosition
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPieceMoves, choosePieceToMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessPiece);
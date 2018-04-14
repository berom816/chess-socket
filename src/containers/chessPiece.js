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
		this.props.choosePieceToMove(this.props.chessPiece);
		this.props.getPieceMoves(this.props.chessPiece, this.props.chessBoard);
	}

	render(){
		return(
			<div className='chess-piece' onClick={this.handleClick}>
				{this.props.chessPiece.pieceName}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {chessBoard:state.chessBoard};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getPieceMoves, choosePieceToMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChessPiece);
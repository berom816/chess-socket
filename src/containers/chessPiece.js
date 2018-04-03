import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {choosePieceToMove} from '../actions';

class ChessPiece extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.props.choosePieceToMove(this.props.chessPiece);
	}

	render(){
		return(
			<div onClick={this.handleClick}>
				
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({choosePieceToMove}, dispatch);
}

export default connect(null, mapDispatchToProps)(ChessPiece);
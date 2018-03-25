import React, {Component} from 'react';

class BoardSquare extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const className = `boardSquare ${this.props.color}`;

    return(
      <div className={className}>
        //props.chessImage
      <div>
    )
  }
}

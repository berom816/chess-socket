import React, {Component} from 'react';

export default class BoardSquare extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const className = `board-square ${this.props.color}`;

    return(
      <div className={className}>
        {this.props.notation}
      </div>
    )
  }
}

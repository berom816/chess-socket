import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChessBoard from './chessBoard';
import PromotionSelection from './promotionSelection';

class Game extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.onPromotionSelection);
    let promotionScreen = this.props.onPromotionSelection ? <PromotionSelection /> : null;

    return (
      <div>
        {promotionScreen}
        <ChessBoard/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { onPromotionSelection: state.onPromotionSelection}
}

export default connect(mapStateToProps)(Game);
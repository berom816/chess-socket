import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PromotionPiece from './promotionPiece';

export default class PromotionSelect extends Component{
    constructor(props){
      super(props);

    }

    render(){
      return (
        <div className='promotion-selection'>
          <PromotionPiece choice='queen' />
          <PromotionPiece choice='rook' />
          <PromotionPiece choice='knight' />
          <PromotionPiece choice='bishop' />
        </div>
      )
    }
}
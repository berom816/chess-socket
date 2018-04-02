import _ from 'lodash';
import npositionKey from './chessBoardPositions';
import piecesOnBoard from '../chessObjects/defaultGame';

const chessBoard = {};

npositionKey.forEach((position,index)=>{
  function determineColor(positionValue){
    const halfFile = ['a', 'c', 'e', 'g'];
    const halfRank = ['1', '3', '5', '7'];

    let positionSplit = positionValue.split('');
    let file = positionSplit[0];
    let row = positionSplit[1];

    if(halfFile.includes(file) && halfRank.includes(row)){
      return 'dark';
    }else if(halfFile.includes(file) && !halfRank.includes(row)){
      return 'light';
    }else if(!halfFile.includes(file) && halfRank.includes(row)){
      return 'light';
    }else{
      return 'dark';
    }
  }

  chessBoard[position] = {
    position:position,
    color:determineColor(position),
    occupied:false,
    pieceOnSquare:null
  }
})

_.forEach(piecesOnBoard, (value, key)=>{
  chessBoard[value.position].occupied = true;
  chessBoard[value.position].pieceOnSquare = value;
})

export {chessBoard};


export default function(state = chessBoard, action){
  switch(action.type){
    default:
      return state;
  }
}

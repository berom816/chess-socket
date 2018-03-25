import notationsKey from './chessBoardNotation';

const chessBoard = {};

notationsKey.forEach((notation,index)=>{
  function determineColor(notationValue){
    const halfFile = ['a', 'c', 'e', 'g'];
    const halfRank = ['1', '3', '5', '7'];

    let notationSplit = notationValue.split('');
    let file = notationSplit[0];
    let row = notationSplit[1];

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

  chessBoard[notation] = {
    notation:notation,
    color:determineColor(notation),
    occupied:false,
    pieceOnSquare:null
  }
})

export default function(state = chessBoard, action){
  switch(action.type){
    default:
      return state;
  }
}

import notationsKey from './chessBoardNotation';

const chessBoard = {};

notationsKey.forEach((notation,index)=>{
  chessBoard[notation] = {
    color:index%2===0?'dark':'light',
    occupied:false,
    pieceOnSquare:null
  }
}))

export default function(state = chessBoard, action){
  switch(action.type){
    default:
      return state;
  }
}

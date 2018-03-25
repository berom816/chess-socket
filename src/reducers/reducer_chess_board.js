const chessBoard = {};
const notationsKey = [];

let ranks = 'a';

for(let i = 1; i <= 8; i++){
  for(let j = 0; j < 8; j++){
    notationsKey.push(ranks+(i.toString()));
    ranks = String.fromCharCode(ranks.charCodeAt(0)+1);
  }
  ranks = 'a';
}

notationsKey.forEach((notation,index)=>{
  chessBoard[notation] = {
    occupied:false;
    pieceOnSquare:null;
  }
  chessBoard[notation].color = index%2===0?'dark':'light';
}))

export default function(state = chessBoard, action){
  switch(action.type){
    default:
      return state;
  }
}

export notationsKey; 

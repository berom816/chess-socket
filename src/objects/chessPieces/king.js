import ChessPiece from './chessPiece';

export default class King extends ChessPiece{
  constructor(pieceColor, position){
    super('king', pieceColor, position);
    this.moved = false;
  }

  move(chessBoardState){

  }
}

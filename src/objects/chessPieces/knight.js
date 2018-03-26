import ChessPiece from './chessPiece';

export default class Knight extends ChessPiece{
  constructor(pieceColor, position){
    super('knight', pieceColor, position);
  }
}

import ChessPiece from './chessPiece';

export default class Rook extends ChessPiece{
  constructor(pieceColor, position){
    super('rook', pieceColor, position);
  }
}

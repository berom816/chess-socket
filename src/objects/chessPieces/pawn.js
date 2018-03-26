import ChessPiece from './chessPiece';

export default class Pawn extends ChessPiece{
  constructor(pieceColor, position){
    super('pawn', pieceColor, position);
  }
}

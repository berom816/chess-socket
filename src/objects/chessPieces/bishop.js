import ChessPiece from './chessPiece';

export default class Bishop extends ChessPiece{
  constructor(pieceColor, position){
    super('bishop', pieceColor, position);
  }
}

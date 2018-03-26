import ChessPiece from './chessPiece';

export default class Queen extends ChessPiece{
  constructor(pieceColor, position){
    super('queen', pieceColor, position);
  }
}

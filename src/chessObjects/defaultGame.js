import King from './chessPieces/king';
import Queen from './chessPieces/queen';
import Bishop from './chessPieces/bishop';
import Knight from './chessPieces/knight';
import Rook from './chessPieces/rook';
import Pawn from './chessPieces/pawn';

let piecesOnBoard = {};

function makeChessPieceObj(piecesOnBoardObj, chessPieceObjName, pieceClass, color, position){
  piecesOnBoardObj[chessPieceObjName] = new pieceClass(color, position);
}

makeChessPieceObj(piecesOnBoard, 'whiteRook1', Rook, 'white', 'a1');
makeChessPieceObj(piecesOnBoard, 'whiteRook2', Rook, 'white', 'h1');
makeChessPieceObj(piecesOnBoard, 'whiteKnight1', Knight, 'white', 'b1');
makeChessPieceObj(piecesOnBoard, 'whiteKnight2', Knight, 'white', 'g1');
makeChessPieceObj(piecesOnBoard, 'whiteBishop1', Bishop, 'white', 'c1');
makeChessPieceObj(piecesOnBoard, 'whiteBishop2', Bishop, 'white', 'f1');
makeChessPieceObj(piecesOnBoard, 'whiteQueen', Queen, 'white', 'd1');
makeChessPieceObj(piecesOnBoard, 'whiteKing', King, 'white', 'e1');
// var file = 'a';
// for(let a = 1; a<=8; a++){
//     makeChessPieceObj(piecesOnBoard, `whitePawn${a}`, Pawn, 'white', `${file}2`);
//     file = String.fromCharCode(file.charCodeAt(0)+1);
// }

makeChessPieceObj(piecesOnBoard, 'blackRook1', Rook, 'black', 'a8');
makeChessPieceObj(piecesOnBoard, 'blackRook2', Rook, 'black', 'h8');
makeChessPieceObj(piecesOnBoard, 'blackKnight1', Knight, 'black', 'b8');
makeChessPieceObj(piecesOnBoard, 'blackKnight2', Knight, 'black', 'g8');
makeChessPieceObj(piecesOnBoard, 'blackBishop1', Bishop, 'black', 'c8');
makeChessPieceObj(piecesOnBoard, 'blackBishop2', Bishop, 'black', 'f8');
makeChessPieceObj(piecesOnBoard, 'blackQueen', Queen, 'black', 'd8');
makeChessPieceObj(piecesOnBoard, 'blackKing', King, 'black', 'e8');
// file = 'a';
// for(let a = 1; a<=8; a++){
//     makeChessPieceObj(piecesOnBoard, `blackPawn${a}`, Pawn, 'black', `${file}7`);
//     file = String.fromCharCode(file.charCodeAt(0)+1);
// }

export default piecesOnBoard;

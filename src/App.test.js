import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {chessBoard} from './reducers/reducer_chess_board';
import Rook from './objects/chessPieces/rook';

it('chess board starting position okay', () => {
  expect(chessBoard.a1.pieceOnSquare.pieceName).toEqual('rook');
  expect(chessBoard.b1.pieceOnSquare.pieceName).toEqual('knight');
  expect(chessBoard.c1.pieceOnSquare.pieceName).toEqual('bishop');
  expect(chessBoard.d1.pieceOnSquare.pieceName).toEqual('queen');
  expect(chessBoard.e1.pieceOnSquare.pieceName).toEqual('king');
  expect(chessBoard.f1.pieceOnSquare.pieceName).toEqual('bishop');
  expect(chessBoard.g1.pieceOnSquare.pieceName).toEqual('knight');
  expect(chessBoard.h1.pieceOnSquare.pieceName).toEqual('rook');

  expect(chessBoard.a2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.b2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.c2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.d2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.e2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.f2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.g2.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.h2.pieceOnSquare.pieceName).toEqual('pawn');

  expect(chessBoard.a8.pieceOnSquare.pieceName).toEqual('rook');
  expect(chessBoard.b8.pieceOnSquare.pieceName).toEqual('knight');
  expect(chessBoard.c8.pieceOnSquare.pieceName).toEqual('bishop');
  expect(chessBoard.d8.pieceOnSquare.pieceName).toEqual('queen');
  expect(chessBoard.e8.pieceOnSquare.pieceName).toEqual('king');
  expect(chessBoard.f8.pieceOnSquare.pieceName).toEqual('bishop');
  expect(chessBoard.g8.pieceOnSquare.pieceName).toEqual('knight');
  expect(chessBoard.h8.pieceOnSquare.pieceName).toEqual('rook');

  expect(chessBoard.a7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.b7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.c7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.d7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.e7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.f7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.g7.pieceOnSquare.pieceName).toEqual('pawn');
  expect(chessBoard.h7.pieceOnSquare.pieceName).toEqual('pawn');
});

it('rook move test', ()=>{
  let rookPiece = new Rook('white', 'd5');
  let moves = rookPiece.move(chessBoard);
  const expectedMoves = ['d6', 'd7', 'd4', 'd3', 'c5', 'b5', 'a5', 'e5', 'f5', 'g5', 'h5'];
  expect(moves).toEqual(expect.arrayContaining(expectedMoves));
})

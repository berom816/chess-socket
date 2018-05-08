import React, { Component } from 'react';

export default function lastMovePieceEndSquare(props) {
  // console.log(props);
  return (
    <div className='last-moved-end-square'>
      {props.boardSquare.pieceOnSquare ? props.boardSquare.pieceOnSquare.pieceName : ''}
    </div>
  )
}
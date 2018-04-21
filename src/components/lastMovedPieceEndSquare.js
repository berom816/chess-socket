import React, { Component } from 'react';

export default function lastMovePieceEndSquare(props) {
  return (
    <div className='last-moved-end-square'>
      {props.chessPiece.pieceName}
    </div>
  )
}
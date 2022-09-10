import React from "react";

export default function Card({ topNum, bottomNum, showAnswer, product }) {
  const answer = showAnswer ? product : "";

  return (
    <div className='card'>
      <div className='card-top'>
        <div className='card-left'>X</div>
        <div className='card-right'>
          <div className='topNum'>{topNum}</div>
          <div className='bottomNum'>{bottomNum}</div>
        </div>
      </div>
      <div className='card-bottom'>
        <div className='answer'>{answer}</div>
      </div>
    </div>
  );
}

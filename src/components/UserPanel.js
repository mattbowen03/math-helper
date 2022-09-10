import React from "react";

export default function UserPanel({
  handleShowAnswer,
  randomValues,
  handleNext,
  handleBack,
  showAnswer,
}) {
  return (
    <div className='userPanel-wrapper'>
      <div className='userPanel-top'>
        <button onClick={() => handleShowAnswer()}>
          {showAnswer ? "Hide " : "Show "}Answer
        </button>
        <button onClick={() => randomValues()}>Random</button>
      </div>
      <div className='userPanel-bottom'>
        <button onClick={() => handleBack()}>-1</button>
        <button onClick={() => handleNext()}>+1</button>
      </div>
    </div>
  );
}

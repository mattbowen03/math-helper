import React from "react";

export default function BottomNumList({ numList, handleBottomNum }) {
  return (
    <div className='bottomNumList'>
      <h3>Bottom Number</h3>
      {numList.map((num) => {
        return (
          <button id={num} onClick={() => handleBottomNum(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
}

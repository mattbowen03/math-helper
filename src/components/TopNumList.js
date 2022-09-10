import React from "react";

export default function TopNumList({ numList, handleTopNum }) {
  return (
    <div className='topNumList'>
      <h3>Top Number</h3>
      {numList.map((num) => {
        return (
          <button id={num} onClick={() => handleTopNum(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
}

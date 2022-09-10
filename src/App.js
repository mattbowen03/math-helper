import "./App.css";
import TopNumList from "./components/TopNumList";
import BottomNumList from "./components/BottomNumList";
import UserPanel from "./components/UserPanel";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [topNum, setTopNum] = useState(0);
  const [bottomNum, setBottomNum] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const product = topNum * bottomNum;

  const handleTopNum = (num) => {
    showAnswer && setShowAnswer(false);
    setTopNum(num);
  };

  const handleBottomNum = (num) => {
    showAnswer && setShowAnswer(false);
    setBottomNum(num);
  };

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const randomValues = () => {
    showAnswer && setShowAnswer(false);
    setBottomNum(Math.floor(Math.random() * 13));
    setTopNum(Math.floor(Math.random() * 13));
  };

  const handleNext = () => {
    showAnswer && setShowAnswer(false);
    bottomNum <= 11 ? setBottomNum((prev) => prev + 1) : setBottomNum(0);
  };

  const handleBack = () => {
    showAnswer && setShowAnswer(false);
    bottomNum >= 1 ? setBottomNum((prev) => prev - 1) : setBottomNum(12);
  };

  return (
    <div className='App'>
      <div className='title'>
        <h1 className='logo'>Math Helper!</h1>
      </div>
      <div className='main-wrapper'>
        <div className='main-left'>
          <TopNumList numList={numList} handleTopNum={handleTopNum} />
        </div>
        <div className='main-center'>
          <Card
            topNum={topNum}
            bottomNum={bottomNum}
            showAnswer={showAnswer}
            product={product}
          />
          <UserPanel
            handleShowAnswer={handleShowAnswer}
            randomValues={randomValues}
            handleNext={handleNext}
            handleBack={handleBack}
            showAnswer={showAnswer}
          />
        </div>
        <div className='main-right'>
          <BottomNumList numList={numList} handleBottomNum={handleBottomNum} />
        </div>
      </div>
    </div>
  );
}

export default App;

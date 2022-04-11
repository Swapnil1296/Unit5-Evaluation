import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [scoreCount, setscoreCount] = useState(76);
  const handleScore = (value) => {
    if (scoreCount >100) {
      return;
    }
    setscoreCount(scoreCount+value)
  }
  const [wicketCount, setwicketCount] = useState(2);
  const handleWicket = (value) => {
    if (wicketCount >= 12) {
      return;
    }
    setwicketCount(wicketCount+value)
  }
  
  const [addBall, setaddBall] = useState(50);
  const handleBall = (value) => {
    setaddBall(addBall+value)
  }
  // const [overCount, setOver] = useState(0);
  // const handleOver = (value) => {
  //   setOver(overCount+value)
  // }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score : {scoreCount}
          <h1 className="scoreCount">{scoreCount}</h1>
        </div>
        <div>
          Wicket : {wicketCount}
          <h1 className="wicketCount">{wicketCount}</h1>
        </div>

        <div>
          Over : {addBall}
          <h1 className="overCount">
            {
              addBall%6
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {scoreCount}
        <button className="addScore1" onClick={() => handleScore(1)}>
          Add 1
        </button>
        <button className="addScore4" onClick={() => handleScore(4)}>
          Add 4
        </button>
        <button className="addScore6" onClick={() => handleScore(6)}>
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {wicketCount}
        <button onClick={() => handleWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {addBall}
        <button onClick={() => handleBall(1)}>Add 1</button>
      </div>
      <h1 className='status'>{scoreCount > 100 ? "India won" : null} </h1>
    </div>
  );
}


export default App;

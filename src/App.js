import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Game from './components/Game';
import QRCodeDisplay from './components/QRCodeDisplay';

function App() {
  const [playerNames, setPlayerNames] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState(false);

  const joinGame = (name) => {
    if (name && !playerNames.includes(name)) {
      setPlayerNames((prev) => [...prev, name]);
      setIsNameEntered(true); // Set the flag to indicate the name is entered
    } else {
      alert("Name is already taken or invalid.");
    }
  };

  const startQuiz = () => {
    setIsMobile(true); // Indicate that the game has started
  };

  return (
    <div className="container">
      {!isMobile ? (
        <>
          <h1>Quiz Game</h1>
          <QRCodeDisplay />
          {!isNameEntered ? (
            <input
              type="text"
              placeholder="Enter your name"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  joinGame(e.target.value);
                  e.target.value = ''; // Clear the input after entering
                }
              }}
            />
          ) : (
            <button onClick={startQuiz}>Start Quiz</button> // Start button appears after name entry
          )}
        </>
      ) : (
        <Game playerNames={playerNames} />
      )}
    </div>
  );
}

export default App;

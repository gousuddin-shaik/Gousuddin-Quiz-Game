import React, { useState } from 'react';
import MobileView from './MobileView';

const questions = [
  {
    question: 'What is the capital of France?',
    options: { A: 'Berlin', B: 'Madrid', C: 'Paris', D: 'Lisbon' },
    answer: 'C'
  },
  {
    question: 'What is 2 + 2?',
    options: { A: '3', B: '4', C: '5', D: '6' },
    answer: 'B'
  },
  {
    question: 'What is the square root of 144 ?',
    options: { A: '2', B: '9', C: '12', D: '13' },
    answer: 'C'
  },
  {
    question: 'Who invented Steam Engine ?',
    options: { A: 'James Watt', B: 'Galelio', C: 'Newton', D: 'Einstein' },
    answer: 'A'
  },
  {
    question: 'What is the chemical formula of water ?',
    options: { A: 'H2', B: 'O2', C: 'H2O2', D: 'H2O' },
    answer: 'D'
  }
  // Add more questions as needed
];

const Game = ({ playerNames }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [playerScores, setPlayerScores] = useState({});
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const submitAnswer = (playerName, answer) => {
      if (answer === currentQuestion.answer) {
        setPlayerScores((prevScores) => ({
          ...prevScores,
          [playerName]: (prevScores[playerName] || 0) + 1
        }));
  
        setMessage(`Congratulations ${playerName}, your answer is correct!`);
      } else {
        setMessage(`Sorry ${playerName}, that's incorrect.`);
      }
  
      // Move to next question or end the game
      if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setMessage('');
        }, 2000);
      } else {
        setGameOver(true);
      }
    };
  
    return (
      <div>
        {!gameOver ? (
          <>
            <h2>Current Question: {currentQuestion.question}</h2>
            <ul>
              {Object.entries(currentQuestion.options).map(([key, value]) => (
                <li key={key}>
                  <div className="option" onClick={() => playerNames.forEach(name => submitAnswer(name, key))}>
                    {key}: {value}
                  </div>
                </li>
              ))}
            </ul>
            {message && <div className="message">{message}</div>}
          </>
        ) : (
          <div className="final-scores">
            <h2>Game Over!</h2>
            <h3>Final Scores:</h3>
            <ul>
              {playerNames.map((player) => (
                <li key={player}>
                  {player}: {playerScores[player] || 0}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Game;
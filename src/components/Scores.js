import React from 'react';

const Scores = ({ scores, playerName }) => {
  return (
    <div>
      <h1>Final Scores</h1>
      <ul>
        {Object.entries(scores).map(([name, score]) => (
          <li key={name}>
            {name}: {score}
          </li>
        ))}
      </ul>
      <h2>{playerName}, your final score is: {scores[playerName]}</h2>
    </div>
  );
};

export default Scores;

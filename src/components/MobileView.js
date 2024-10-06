import React from 'react';

const MobileView = ({ playerNames }) => {
  return (
    <div>
      <h3>Players:</h3>
      <ul>
        {playerNames.map((playerName) => (
          <li key={playerName}>{playerName}</li>
        ))}
      </ul>
    </div>
  );
};

export default MobileView;

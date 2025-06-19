import React from 'react';

const Result = ({ score }) => {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p style={{ fontSize: '18px' }}>Your Score: {score}</p>
    </div>
  );
};

export default Result;

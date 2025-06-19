import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: "Jupiter"
  }
];

const QuizApp = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].correctAnswer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', fontFamily: 'Arial' }}>
      {isFinished ? (
        <Result score={score} />
      ) : (
        <Question
          index={current}
          questionData={questions[current]}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default QuizApp;

import { useState } from 'react';
import { quizData } from '../data/quizData';
import Question from './Question';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Quiz</h1>
      {showScore ? (
        <div>
          <h3>Your Score: {score} / {quizData.length}</h3>
        </div>
      ) : (
        <Question
          question={quizData[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default Quiz;
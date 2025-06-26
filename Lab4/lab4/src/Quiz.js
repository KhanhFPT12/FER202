import React, { useState } from 'react';
import './App.css';

const initialQuestions = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript',
    ],
    correctAnswer: 'A syntax extension for JavaScript',
  },
];

const Quiz = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [showInputForm, setShowInputForm] = useState(false);

  const [currentInput, setCurrentInput] = useState({
    question: '',
    answers: ['', '', ''],
    correctAnswer: '',
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleChange = (e, index) => {
    if (e.target.name === 'question' || e.target.name === 'correctAnswer') {
      setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
    } else {
      const updatedAnswers = [...currentInput.answers];
      updatedAnswers[index] = e.target.value;
      setCurrentInput({ ...currentInput, answers: updatedAnswers });
    }
  };

  const handleAddQuestion = () => {
    if (
      currentInput.question.trim() &&
      currentInput.answers.every((ans) => ans.trim()) &&
      currentInput.correctAnswer.trim()
    ) {
      setQuestions([...questions, currentInput]);
      setCurrentInput({ question: '', answers: ['', '', ''], correctAnswer: '' });
      setShowInputForm(false);
    } else {
      alert('Vui lòng nhập đầy đủ câu hỏi, 3 đáp án và đáp án đúng.');
    }
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer('');

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {!isQuizCompleted ? (
        <>
          <h2 className="question-title">Question {currentQuestion + 1}</h2>
          <p className="question-text">{questions[currentQuestion].question}</p>
          <div className="answers-list">
            {questions[currentQuestion].answers.map((answer, index) => (
              <div key={index} className="answer-option">
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={() => handleAnswer(answer)}
                />
                {answer}
              </div>
            ))}
          </div>

          <div className="button-group">
            <button className="next-button" onClick={handleNext} disabled={!selectedAnswer}>
              Next
            </button>
            <button className="add-button" onClick={() => setShowInputForm(true)}>
              Thêm câu hỏi
            </button>
          </div>

          {showInputForm && (
            <div className="input-form">
              <h3>Thêm câu hỏi mới</h3>
              <input
                type="text"
                name="question"
                placeholder="Câu hỏi"
                value={currentInput.question}
                onChange={handleChange}
              />
              {currentInput.answers.map((ans, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Đáp án ${index + 1}`}
                  value={ans}
                  onChange={(e) => handleChange(e, index)}
                />
              ))}
              <input
                type="text"
                name="correctAnswer"
                placeholder="Đáp án đúng"
                value={currentInput.correctAnswer}
                onChange={handleChange}
              />
              <div className="button-group">
                <button onClick={handleAddQuestion}>Lưu câu hỏi</button>
                <button onClick={() => setShowInputForm(false)}>Hủy</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="result-screen">
          <h1 className="quiz-completed">Quiz Completed!</h1>
          <p className="score-text">Your score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

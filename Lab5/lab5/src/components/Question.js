import { Button } from 'react-bootstrap';

function Question({ question, handleAnswer }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <div>
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline-primary"
            className="m-2"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Question;
import React from 'react';

const Question = ({ index, questionData, total, onAnswer }) => {
  return (
    <div>
      <h2 style={{ marginBottom: '5px' }}>Question  {index + 1} :</h2>
      <p style={{ fontSize: '18px', marginBottom: '15px' }}>{questionData.question}</p>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '5px 10px'
        }}
      >
        {questionData.options.map((opt, idx) => (
          <div key={idx} style={{ padding: '6px 0', borderBottom: idx !== questionData.options.length - 1 ? '1px solid #eee' : 'none' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onAnswer(opt);
              }}
              style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}
            >
              {opt}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;

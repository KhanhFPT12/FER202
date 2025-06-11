import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed text: {text}</p>
    </div>
  );
}

export default ControlledInput;
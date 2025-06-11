import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('white');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <select value={color} onChange={handleColorChange}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: color, width: '200px', height: '200px' }}>
        Background Color
      </div>
    </div>
  );
}

export default ColorSwitcher;
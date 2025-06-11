import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isVisible ? 'Hide' : 'Show'}</button>
      {isVisible && <p>This is the toggled text!</p>}
    </div>
  );
}

export default ToggleVisibility;
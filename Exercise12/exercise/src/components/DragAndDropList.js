import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (draggingItem === null) return;
    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          style={{ padding: '10px', border: '1px solid #ccc', margin: '5px' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDropList;
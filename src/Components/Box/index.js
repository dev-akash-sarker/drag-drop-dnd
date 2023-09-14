import React, { useState } from "react";

export default function Dropas() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    // Add more items here
  ]);

  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
    setDroppedItems([...droppedItems, droppedItem]);
  };
  return (
    <div>
      <div>
        <h2>Available Items</h2>
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              draggable={true}
              onDragStart={(e) => handleDragStart(e, item)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Dropped Items</h2>
        <ul>
          {droppedItems.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    const lists = document.getElementsByClassName("list");
    const rightBox = document.getElementById("right");
    const leftBox = document.getElementById("left");

    const handleDragStart = (e) => {
      const selected = e.target;

      const handleDragOver = (e) => {
        e.preventDefault();
      };

      const handleDrop = (e) => {
        const targetBox = e.currentTarget;
        targetBox.appendChild(selected);
      };

      rightBox.addEventListener("dragover", handleDragOver);
      rightBox.addEventListener("drop", handleDrop);
      leftBox.addEventListener("dragover", handleDragOver);
      leftBox.addEventListener("drop", handleDrop);

      // Cleanup event listeners when the component unmounts
      return () => {
        rightBox.removeEventListener("dragover", handleDragOver);
        rightBox.removeEventListener("drop", handleDrop);
        leftBox.removeEventListener("dragover", handleDragOver);
        leftBox.removeEventListener("drop", handleDrop);
      };
    };

    for (let list of lists) {
      list.addEventListener("dragstart", handleDragStart);
    }

    // Cleanup event listeners when the component unmounts
    return () => {
      for (let list of lists) {
        list.removeEventListener("dragstart", handleDragStart);
      }
    };
  }, []);

  return (
    <>
      <div className="container">
        <div id="left">
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            List Item 1
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            List Item 2
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            List Item 3
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            List Item 4
          </div>
        </div>
        <div id="right"></div>
      </div>
    </>
  );
}

export default App;

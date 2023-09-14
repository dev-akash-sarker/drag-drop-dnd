import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const lists = document.getElementsByClassName("list");
    const rightContainers = document.querySelectorAll(".right");

    const handleDragStart = (e) => {
      const selected = e.target;

      const handleDragOver = (e) => {
        e.preventDefault();
      };

      const handleDrop = (e) => {
        const targetContainer = e.currentTarget;
        targetContainer.appendChild(selected);
      };

      rightContainers.forEach((container) => {
        container.addEventListener("dragover", handleDragOver);
        container.addEventListener("drop", handleDrop);
      });

      // Cleanup event listeners when the component unmounts
      return () => {
        rightContainers.forEach((container) => {
          container.removeEventListener("dragover", handleDragOver);
          container.removeEventListener("drop", handleDrop);
        });
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
        <div className="right">
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            Item 1
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            Item 2
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            Item 3
          </div>
          <div className="list" draggable>
            <img src="./assets/logo/drag_drop_icon.png" alt="" />
            Item 4
          </div>
        </div>
        <div className="right"></div>
        <div className="right"></div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default App;

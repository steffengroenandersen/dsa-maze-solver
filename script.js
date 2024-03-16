"use strict";

window.addEventListener("load", start);

// ********** CONTROLLER **********

function start() {
  console.log("start()");

  const mazeModel = fetchMaze().then((mazeModel) => renderMaze(mazeModel));
}

// ********** MODEL **********

// MAZE MODEL

async function fetchMaze() {
  console.log("fetchMaze()");
  try {
    const response = await fetch("maze.json");

    if (!response.ok) throw new Error("Failed to fetch maze data.");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// ********** VIEW **********

function renderMaze(mazeData) {
  console.log("renderMaze()");
  const mazeContainer = document.querySelector(".maze");

  let mazeHTML = "";

  for (let row = 0; row < mazeData.rows; row++) {
    for (let col = 0; col < mazeData.cols; col++) {
      const cell = mazeData.maze[row][col];

      let cellClasses = 'cell';

      if (cell.north) {
        cellClasses += ' border-north';
      }
      if (cell.east) {
        cellClasses += ' border-east';
      }
      if (cell.west) {
        cellClasses += ' border-west';
      }
      if (cell.south) {
        cellClasses += ' border-south';
      }

      mazeHTML += `<div class="${cellClasses}"></div>`;
    }
  }

  mazeContainer.innerHTML = mazeHTML;
}

"use strict";

import Maze from "./model/mazeModel.js";

window.addEventListener("load", start);

// ********** CONTROLLER **********

const maze = new Maze();

async function start() {
  console.log("start()");

  await maze.fetchMaze();
  const mazeModel = maze.getMazeModel();
  renderMaze(mazeModel);

  const board = mazeModel.maze;
  const cell = mazeModel.maze[0][0];
  console.log(cell);
  const goal = mazeModel.goal;

  visitCell(board, cell, goal);

  console.log(route);
  animateRoute(mazeModel);
}
// ********** MODEL **********

// ROUTE MODEL

const route = [];

function visitCell(board, cell, goal) {
  console.log("visitCell()");

  cell.visited = true;
  console.log(
    `Current cell: Row: ${cell.row} | Col: ${cell.col} | North: ${cell.north} | East: ${cell.east} | West: ${cell.west} | South: ${cell.south} | Visited: ${cell.visited}`
  );

  route.push(cell);

  if (cell.row === goal.row && cell.col === goal.col) {
    console.log("GOAL!");
    return true; // Goal is found, so return true
  }

  // Decide if to go north
  if (cell.north !== true && !board[cell.row - 1][cell.col].visited) {
    console.log("Going north!");
    if (visitCell(board, board[cell.row - 1][cell.col], goal)) return true;
  }

  // Decide if to go east
  if (cell.east !== true && !board[cell.row][cell.col + 1].visited) {
    console.log("Going east!");
    if (visitCell(board, board[cell.row][cell.col + 1], goal)) return true;
  }

  // Decide if to go west
  if (cell.west !== true && !board[cell.row][cell.col - 1].visited) {
    console.log("Going west!");
    if (visitCell(board, board[cell.row][cell.col - 1], goal)) return true;
  }

  // Decide if to go south
  if (cell.south !== true && !board[cell.row + 1][cell.col].visited) {
    console.log("Going south!");
    if (visitCell(board, board[cell.row + 1][cell.col], goal)) return true;
  }

  route.pop(); // Remove current cell from route
  cell.visited = false; // Mark current cell as unvisited
  console.log("Backtracking...");

  return false;
}

// ********** VIEW **********

function renderMaze(mazeData) {
  console.log("renderMaze()");
  const mazeContainer = document.querySelector(".maze");

  let mazeHTML = "";
  const start = mazeData.start;
  const goal = mazeData.goal;

  for (let row = 0; row < mazeData.rows; row++) {
    for (let col = 0; col < mazeData.cols; col++) {
      const cell = mazeData.maze[row][col];

      let cellClasses = "cell";

      if (cell.row === start.row && cell.col === start.col) {
        cellClasses += " start";
      }
      if (cell.row === goal.row && cell.col === goal.col) {
        cellClasses += " goal";
      }

      if (cell.north) {
        cellClasses += " border-north";
      }
      if (cell.east) {
        cellClasses += " border-east";
      }
      if (cell.west) {
        cellClasses += " border-west";
      }
      if (cell.south) {
        cellClasses += " border-south";
      }

      mazeHTML += `<div class="${cellClasses}"></div>`;
    }
  }

  mazeContainer.innerHTML = mazeHTML;
}

function animateRoute(mazeModel) {
  console.log("animateRoute()");
  const cells = document.querySelectorAll(".cell");

  // Loop through each cell in the route and add a class with a delay
  route.forEach((cell, index) => {
    setTimeout(() => {
      cells[cell.row * mazeModel.cols + cell.col].classList.add("visited");
    }, index * 1000); // Add a delay of 1 second for each cell
  });
}

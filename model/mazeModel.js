"use strict";

export default class Maze {
  constructor() {
    this.mazeModel = null;
  }

  async fetchMaze() {
    console.log("fetchMaze()");
  
    try {
      const response = await fetch("maze.json");
    
      if (!response.ok) throw new Error("Failed to fetch maze data.");
  
      this.mazeModel = await response.json();
  
      return this.mazeModel;
    } catch (error) {
      console.error(error);
    }
  }

  getMazeModel() {
    console.log("getMazeModel()");
    return this.mazeModel;
  }
}

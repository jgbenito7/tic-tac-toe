import * as React from "react";

import { TicTacToe } from "../TicTacToe";

import "./index.css";

export const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="game-board">
        <TicTacToe />
      </div>
    </div>
  );
};

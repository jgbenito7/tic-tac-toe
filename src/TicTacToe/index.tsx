import React from "react";
import "./index.css";

enum Players {
  X = "X",
  O = "O"
}

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const initPlayer = () => {
  return getRandomInt(1) === 1 ? Players.X : Players.O;
};

type Board = Array<Players | null>;

export const TicTacToe = () => {
  const initialBoard: Board = Array.from({ length: 9 }, () => null);
  const [boardState, setBoardState] = React.useState(initialBoard);
  const [playerTurn, setPlayerTurn] = React.useState(initPlayer());
  const [win, setWin] = React.useState(false);

  const togglePlayer = () => {
    setPlayerTurn(playerTurn === Players.X ? Players.O : Players.X);
  };

  const onBoxClick = (idx: number) => {
    if (boardState[idx] !== null || win) {
      return;
    }

    boardState[idx] = playerTurn;
    setBoardState(boardState);

    if (checkWin(boardState)) {
      return setWin(true);
    }

    togglePlayer();
  };

  const checkWin = (board: Board) => {
    const winningIndices = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningIndices.some(indices =>
      indices.every(idx => board[idx] === playerTurn)
    );
  };

  return (
    <>
      <div className="grid">
        {boardState.map((boxState, idx) => (
          <div className="grid-element" onClick={() => onBoxClick(idx)}>
            {boxState}
          </div>
        ))}
      </div>
      {win && <div className="win">{`${playerTurn} won the game!!!`}</div>}
    </>
  );
};

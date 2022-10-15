import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import stylesUrl from "~/styles/tictac.css";

export const meta: MetaFunction = () => {
  return {
    title: "Tic Tac Toe - Typescript React",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};


function Square () {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }


function renderSquare(i: number) {
  return <Square />;
}

function Board() {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null))

    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  }


export default function TicTacToeGame(){

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

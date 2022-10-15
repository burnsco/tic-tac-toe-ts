import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useState } from "react";
import stylesUrl from "~/styles/tictac.css";
import { useToggle } from "~/utils/useToggle";

export const meta: MetaFunction = () => {
  return {
    title: "Tic Tac Toe - Typescript React",
  };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}


const initialGameBoard = Array(9).fill(null)

type SquareType = {
  position: number;
  value: number;
}


function Board() {
  const [xsTurn, { toggle }] = useToggle()
  const [gameBoard, setGameBoard] = useState(initialGameBoard)
  const winner = calculateWinner(gameBoard)

  const Square = ({position, value}:SquareType)=> 
      <div 
        className="squares"
        onClick={() => {
        const currBoard = [...gameBoard]
    
        if (xsTurn && currBoard[position] === null && !winner) {
        
          currBoard[position] = 'X'
          toggle()
        
        }
       if(!xsTurn && currBoard[position] === null && !winner){
          currBoard[position] = 'O'
          toggle()
        }
        
        setGameBoard(currBoard)
      }} 
  
      >{value}
    </div>

function resetGame(){
  setGameBoard(initialGameBoard)
}
    

    return (
      <div>
       <div className="top-bar">
      <button onClick={resetGame} type="button" className="reset-button">Reset</button>
      <p>Who's Turn? {xsTurn ? 'X' : 'O'}</p>
      <p>Is there a winner? {winner}</p>
      </div>
      <div className="board">
      {gameBoard.map(
        ( square, index ) => 
          <Square 
            key={`Square ${index}`} 
            value={square} 
            position={index} 
        />
      )} </div>
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

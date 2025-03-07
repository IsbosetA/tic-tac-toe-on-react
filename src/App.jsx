import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

//Constants
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { resetGameStorage, saveGame } from './logic/storage'

//Components
import { ResetGameButton } from './components/ResetGameButton'
import { TurnsSection } from './components/TurnsSection'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'


function App() {
  const [board, setBoard] = useState(() => {
    const boradFromStorage = window.localStorage.getItem('board')
    if (boradFromStorage) return JSON.parse(boradFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    
    resetGameStorage()
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardamos la partida
    saveGame({board: newBoard, turn: newTurn})

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <ResetGameButton resetGame={resetGame} buttonText="Reiniciar Juego" />
      
      <Board board={board} updateBoard={updateBoard}/>

      <TurnsSection turn={turn} turns={TURNS} />
      
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App

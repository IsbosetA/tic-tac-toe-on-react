import { Square } from "./Square"
import { ResetGameButton } from "./ResetGameButton"

export function WinnerModal ({winner, resetGame}) {
    if(winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Gano: '
    return (
      <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>
          <header className='win'>
            {winner &&  <Square>{winner}</Square>}
          </header>

          <footer>
            <ResetGameButton resetGame={resetGame} buttonText="Empezar de Nuevo" />
          </footer>
        </div>
      </section>
    )
}
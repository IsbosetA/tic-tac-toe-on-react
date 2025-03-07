export const ResetGameButton = ({resetGame, buttonText}) => {
    return (
        <button onClick={resetGame}>{buttonText}</button>
    )
}
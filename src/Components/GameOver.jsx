export default function GameOver({ score, refresh }) {
  return (
    <div
      class="d-flex flex-column justify-content-center"
      style={{ height: "75vh" }}
    >
      <h1>{score().win > 5 ? "Congratulations!!" : "Game Over"}</h1>
      <h3>Your score: {score().win}/10</h3>
      <h3>{score().win > 5 ? "You won!" : "You lose!"}</h3>
      <div>
        <button class="btn btn-warning mt-3" onClick={refresh}>
          Try again
        </button>
      </div>
    </div>
  );
}

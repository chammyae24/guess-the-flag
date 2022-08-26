export default function GameScoreScreen({
  score,
  refresh,
  mode,
  setHistoryMode,
  historyMode
}) {
  return (
    <div
      class="d-flex flex-column justify-content-center"
      style={{ height: "75vh" }}
    >
      <h1>{score().win > 5 ? "Congratulations!!" : "Game Over"}</h1>
      <h3>Your score: {score().win}/10</h3>
      <h3>{score().win > 5 ? "You won!" : "You lose!"}</h3>
      <div>
        <button class="btn btn-warning mt-3" onClick={() => refresh(mode())}>
          {score().win > 5 ? "Restart" : "Try again"}
        </button>
      </div>
      <div>
        <button
          class="btn btn-warning mt-3"
          onClick={() => setHistoryMode(!historyMode())}
        >
          Check Your Answers
        </button>
      </div>
    </div>
  );
}

import { createSignal } from "solid-js";
import AnswerButton from "./Components/AnswerButton";
import GameDisplay from "./Components/GameDisplay";
import GameOver from "./Components/GameOver";
import { randomCountry, multipleChoices, gameLogic } from "./utils/utils";

function App() {
  const [countries, setCountries] = createSignal(randomCountry(10));
  const [num, setNum] = createSignal(0);
  const [choices, setChoices] = createSignal(multipleChoices(countries()));
  const [score, setScore] = createSignal({
    win: 0,
    lose: 0
  });
  const [game, setGame] = createSignal(false);
  const [controlButtonPointer, setControlButtonPointer] = createSignal(false);

  const number = () => {
    if (num() < 9) {
      setControlButtonPointer(true);
      setTimeout(() => {
        setControlButtonPointer(false);
        setNum(n => n + 1);
      }, 700);
    }
    setGame(gameLogic(score()));
  };

  const refresh = () => {
    setCountries(randomCountry(10));
    setNum(0);
    setScore({ win: 0, lose: 0 });
    setGame(false);
    setChoices(multipleChoices(countries()));
  };

  return (
    <div class="text-center">
      <h1 class="mt-3" style={title}>
        "Guess the Flag"
      </h1>

      {game() ? (
        <GameOver score={score} refresh={refresh} />
      ) : (
        <>
          <GameDisplay
            game={game}
            countries={countries}
            num={num}
            refresh={refresh}
            score={score}
          />

          <div
            class="row ans-btns-container"
            style={{
              margin: 0,
              "pointer-events": controlButtonPointer() ? "none" : "auto"
            }}
          >
            {choices()[num()].map(choice => (
              <AnswerButton
                choice={choice}
                answer={countries()[num()].name}
                number={number}
                setScore={setScore}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const title = {
  "font-family": "Fredoka One, cursive",
  color: "#f0680d"
};

export default App;

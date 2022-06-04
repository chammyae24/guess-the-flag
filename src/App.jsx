import { createSignal } from "solid-js";
import AnswerButton from "./Components/AnswerButton";
import GameDisplay from "./Components/GameDisplay";
import GameModal from "./Components/GameModal";
import GameOver from "./Components/GameOver";
import {
  randomCountry,
  multipleChoices,
  randomAsiaCountry
} from "./utils/utils";

function App() {
  const [countries, setCountries] = createSignal(randomCountry(10));
  const [num, setNum] = createSignal(0);
  const [score, setScore] = createSignal({
    win: 0,
    lose: 0
  });
  const [game, setGame] = createSignal(false);
  const [controlButtonPointer, setControlButtonPointer] = createSignal(false);
  const [mode, setMode] = createSignal("all");
  const [choices, setChoices] = createSignal(
    multipleChoices(countries(), mode())
  );
  const [modal, setModal] = createSignal(false);

  const select = e => {
    setMode(e.target.value);
    refresh(mode());
  };

  const number = () => {
    if (num() < 9) {
      setControlButtonPointer(true);
      setTimeout(() => {
        setControlButtonPointer(false);
        setNum(n => n + 1);
      }, 700);
    } else {
      setModal(true);
    }
  };

  const refresh = mode => {
    if (mode === "all") {
      setCountries(randomCountry(10));
    } else if (mode === "asia") {
      setCountries(randomAsiaCountry(10));
    }
    setNum(0);
    setGame(false);
    setChoices(multipleChoices(countries()));
  };

  return (
    <div class="text-center">
      <h1 class="mt-3" style={title}>
        "Guess the Flag"
      </h1>

      {game() ? (
        <GameOver score={score} refresh={refresh} mode={mode} />
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
      {modal() && (
        <GameModal
          setGame={setGame}
          score={score}
          setScore={setScore}
          setModal={setModal}
        />
      )}
      <select class="m-3 form-select" style={selectStyle} onChange={select}>
        <option value="all">All</option>
        <option value="asia">Asia (Easy)</option>
      </select>
    </div>
  );
}

const selectStyle = {
  width: "125px"
};

const title = {
  "font-family": "Fredoka One, cursive",
  color: "#f0680d"
};

export default App;

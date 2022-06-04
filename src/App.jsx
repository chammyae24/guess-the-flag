import { createSignal } from "solid-js";
import AnswerButton from "./Components/AnswerButton";
import GameDisplay from "./Components/GameDisplay";
import GameModal from "./Components/GameModal";
import GameOver from "./Components/GameOver";
import {
  randomCountry,
  multipleChoices,
  randomAsiaCountry,
  randomNumber
} from "./utils/utils";

function App() {
  const [rand, setRand] = createSignal(randomNumber(250));
  const [countries, setCountries] = createSignal(randomCountry(10, rand()));
  const [num, setNum] = createSignal(0);
  const [score, setScore] = createSignal({
    win: 0,
    lose: 0
  });
  const [game, setGame] = createSignal(false);
  const [controlButtonPointer, setControlButtonPointer] = createSignal(false);
  const [mode, setMode] = createSignal("all");
  const [choices, setChoices] = createSignal(
    multipleChoices(countries(), mode(), rand())
  );
  const [modal, setModal] = createSignal(false);

  const select = e => {
    setMode(e.target.value);
    refresh(mode());
    // if (mode() === "all") {
    //   setRand(randomNumber(250));
    // } else if (mode() === "asia") {
    //   setRand(randomNumber(50));
    // }
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

  const refresh = continent => {
    if (continent === "all") {
      setRand(randomNumber(250));
      setCountries(randomCountry(10, rand()));
    } else if (continent === "asia") {
      setRand(randomNumber(50));
      setCountries(randomAsiaCountry(10, rand()));
    }
    setScore({
      win: 0,
      lose: 0
    });
    setNum(0);
    setGame(false);
    setChoices(multipleChoices(countries(), mode(), rand()));
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
          <select class="m-3 form-select" style={selectStyle} onChange={select}>
            <option value="all">All</option>
            <option value="asia">Asia (Easy)</option>
          </select>
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

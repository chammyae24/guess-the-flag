import { createSignal } from "solid-js";
import GameHistory from "./GameHistory";
import GameScoreScreen from "./GameScoreScreen";

export default function GameOver(props) {
  const { score, refresh, mode, countries, storeAnswers, choices } = props;

  const [historyMode, setHistoryMode] = createSignal(false);

  return (
    <>
      <GameScoreScreen
        score={score}
        refresh={refresh}
        mode={mode}
        setHistoryMode={setHistoryMode}
        historyMode={historyMode}
      />
      {historyMode() && (
        <GameHistory
          countries={countries}
          storeAnswers={storeAnswers}
          choices={choices}
        />
      )}
    </>
  );
}

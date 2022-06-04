import "./gameModal.css";
import { gameLogic, modal } from "../utils/utils";

export default function GameModal({ setGame, score, setModal }) {
  const popUp = () => {
    setGame(gameLogic(score()));
    setModal(false);
  };

  return (
    <div class="game-modal-container">
      <div class="game-modal">
        <h1>{modal(score())}</h1>
        <button class="btn btn-secondary game-modal-btn" onClick={popUp}>
          Ok
        </button>
      </div>
    </div>
  );
}

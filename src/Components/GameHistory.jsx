import { createEffect } from "solid-js";
import "./gameHistory.css";

export default function GameHistory({ countries, storeAnswers, choices }) {
  const btnClass = (i, ans1, ans2) => {
    if (ans1 === countries()[i].name) {
      return "btn-success";
    } else if (ans2 === ans1) {
      return "btn-danger";
    } else {
      return "btn-info";
    }
  };

  const emoji = (i, ans1, ans2) => {
    if (ans1 === countries()[i].name && ans2 === ans1) {
      return <span style={abs}>💖</span>;
    } else if (ans2 === ans1) {
      return <span style={abs}>❌</span>;
    } else {
      return "";
    }
  };

  const arr = [0, 1, 2, 3];

  return (
    <div class="game-history">
      <h1 class="mb-4">Game History</h1>
      <div class="row row-container">
        {storeAnswers().map((country, i) => {
          return (
            <div class="history-container col-xl-6" style={containerStyle}>
              <div style={imgContainerStyle}>
                <img src={countries()[i].flag} style={img} />
              </div>
              <div style={btnContainerStyle}>
                {arr.map(c => {
                  return (
                    <div
                      class={btnClass(i, choices()[i][c].name, country)}
                      style={btnStyle}
                    >
                      {choices()[i][c].name}{" "}
                      {emoji(i, choices()[i][c].name, country)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  margin: "20px 0",
  "justify-content": "center"
};

const btnStyle = {
  width: "20rem",
  height: "2.2rem",
  margin: "0 1rem",
  "border-radius": "5px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
  position: "relative"
};

const btnContainerStyle = {
  display: "flex",
  "flex-direction": "column",
  "row-gap": "0.3rem"
};

const imgContainerStyle = {
  width: "20rem",
  height: "10rem",
  "background-color": "#ccc",
  "border-radius": "5px",
  border: "1px solid #ccc"
};

const img = {
  width: "100%",
  height: "100%",
  "object-fit": "contain"
};

const abs = {
  position: "absolute",
  right: "0",
  margin: "10px"
};

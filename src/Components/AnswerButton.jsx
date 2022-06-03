import { createEffect, createSignal } from "solid-js";

export default function AnswerButton(props) {
  const { choice, answer, number, setScore } = props;
  const [bgcolor, setBgcolor] = createSignal("btn-info");

  const check = () => {
    setBgcolor(choice.name === answer ? "btn-success" : "btn-danger");

    if (choice.name === answer) {
      setScore(sc => ({ ...sc, win: sc.win + 1 }));
    } else {
      setScore(sc => ({ ...sc, lose: sc.lose + 1 }));
    }

    number();
  };

  const btnStyle = {
    padding: "10px ",
    margin: "5px 0",
    width: "100%"
  };

  return (
    <div class="col-lg-3 col-md-6 col-sm-12">
      <button class={"btn " + bgcolor()} style={btnStyle} onClick={check}>
        {choice.name}
      </button>
    </div>
  );
}

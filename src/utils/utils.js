import { country } from "../../data";
import { asia } from "../../asia";

export const randomNumber = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr.sort((a, b) => 0.5 - Math.random());
};

export function randomCountry(num, code = "000", mode = "all") {
  let array = [];
  let index = mode === "all" ? randomNumber(250) : randomNumber(50);
  let state = mode === "all" ? country : asia;

  for (let i = 0; i < num; i++) {
    if (code === state[index[i]].code) {
      array.push(state[index[i + 1]]);
    } else {
      array.push(state[index[i]]);
    }
    // array.push(country[index[i]]);
  }

  return array;
}

export function multipleChoices(choices) {
  let array = [];

  for (let i = 0; i < 10; i++) {
    const choice = [
      choices[i],
      choices[i + 10],
      choices[i + 20],
      choices[i + 30]
    ];
    const shuffel = choice.sort((a, b) => 0.5 - Math.random());
    array.push(shuffel);
  }

  return array;
}

export function gameLogic(score) {
  return score.win + score.lose === 10;
}

export function modal(score) {
  if (score.win > score.lose) {
    return "You Win";
  } else if (score.win === score.lose) {
    return "Draw";
  } else {
    return "You lose";
  }
}

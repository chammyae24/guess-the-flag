import { country } from "./data/data";
import { asia } from "./data/asia";
import { europe } from "./data/europe";

export const randomNumber = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr.sort((a, b) => 0.5 - Math.random());
};

export function randomCountry(num, mode = "all") {
  let array = [];
  let index, state;

  switch (mode) {
    case "asia":
      index = randomNumber(50);
      state = asia;
      break;
    case "europe":
      index = randomNumber(53);
      state = europe;
      break;
    default:
      index = randomNumber(250);
      state = country;
  }

  for (let i = 0; i < num; i++) {
    array.push(state[index[i]]);
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

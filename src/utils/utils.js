import { country } from "../../data";
import { asia } from "../../asia";

const randomNumber = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr.sort((a, b) => 0.5 - Math.random());
};

const rand50 = randomNumber(50);
const rand250 = randomNumber(250);

export function randomCountry(num, name = "country") {
  // let index = randomNumber(250);
  // let index = () => Math.floor(Math.random() * 250);
  let array = [];

  for (let i = 0; i < num; i++) {
    if (name === country[rand250[i]].name) {
      array.push(country[rand250[i] + 1]);
    } else {
      array.push(country[rand250[i]]);
    }
  }

  return array;
}

export function randomAsiaCountry(num, name = "country") {
  // const index = () => randomNumber(50);
  // let index = () => Math.floor(Math.random() * 50);
  let array = [];
  // console.log(index);

  for (let i = 0; i < num; i++) {
    if (name === asia[rand50[i]].name) {
      array.push(asia[rand50[i] + 1]);
    } else {
      array.push(asia[rand50[i]]);
    }
  }

  return array;
}

export function multipleChoices(choices, mode) {
  let array = [];
  const rand = mode === "all" ? randomCountry : randomAsiaCountry;

  for (let i = 0; i < choices.length; i++) {
    const choice = [choices[i], ...rand(3, choices[i].name)];
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

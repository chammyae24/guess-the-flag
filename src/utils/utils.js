import { country } from "../../data";
import { asia } from "../../asia";

export const randomNumber = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr.sort((a, b) => 0.5 - Math.random());
};

export function randomCountry(num, name = "country") {
  let array = [];
  // console.log(rand);
  let index = randomNumber(250);

  for (let i = 0; i < num; i++) {
    if (name === country[index[i]].code) {
      array.push(country[index[i + 1]]);
    } else {
      array.push(country[index[i]]);
    }
    // array.push(country[index[i]]);
  }

  return array;
}

export function randomAsiaCountry(num, name = "country") {
  let array = [];
  let index = randomNumber(50);
  // console.log(rand);

  for (let i = 0; i < num; i++) {
    if (name === asia[index[i]].code) {
      array.push(asia[index[i + 1]]);
    } else {
      array.push(asia[index[i]]);
    }
    // array.push(asia[randomNumber(50)[i]]);
  }

  return array;
}

export function multipleChoices(choices, mode) {
  let array = [];
  const random = mode === "all" ? randomCountry : randomAsiaCountry;
  // const arr = mode === "all" ? rand

  for (let i = 0; i < choices.length; i++) {
    const choice = [choices[i], ...random(3, choices[i].name)];
    const shuffel = choice.sort((a, b) => 0.5 - Math.random());
    array.push(shuffel);
  }
  console.log(array);

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

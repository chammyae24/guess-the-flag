import { country } from "../../data";
import { asia } from "../../asia";

export const randomNumber = num => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return arr.sort((a, b) => 0.5 - Math.random());
};

export function randomCountry(num, rand, name = "country") {
  let array = [];
  // console.log(rand);

  for (let i = 0; i < num; i++) {
    array.push(country[randomNumber(250)[i]]);
  }

  return array;
}

export function randomAsiaCountry(num, rand, name = "country") {
  let array = [];
  // console.log(rand);

  for (let i = 0; i < num; i++) {
    array.push(asia[randomNumber(50)[i]]);
  }

  return array;
}

export function multipleChoices(choices, mode, rand) {
  let array = [];
  const random = mode === "all" ? randomCountry : randomAsiaCountry;
  // const arr = mode === "all" ? rand

  for (let i = 0; i < choices.length; i++) {
    const choice = [choices[i], ...random(3, rand, choices[i].name)];
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

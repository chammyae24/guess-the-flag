import { country } from "../../data";

export function randomCountry(num, name = "country") {
  let index = () => Math.floor(Math.random() * 250);
  let array = [];

  for (let i = 0; i < num; i++) {
    if (name === country[index()].name) {
      array.push(country[index() + 1]);
    } else {
      array.push(country[index()]);
    }
  }

  return array;
}

export function multipleChoices(choices) {
  let array = [];

  for (let i = 0; i < choices.length; i++) {
    const choice = [choices[i], ...randomCountry(3, choices[i].name)];
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

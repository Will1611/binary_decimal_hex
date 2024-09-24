// Clear up variable declarations + add init() function
// Optimize functions + add default parameters
// Get rid of cols arrays and generate dynamically

"use strict";

import { btnGen } from "./js/variables.js";

import {
  binaryToDecimal,
  binaryToHex,
  decimalToBinary,
  decimalToHex,
  hexToBinary,
  hexToDecimal,
} from "./js/main_functions.js";

function generateQuestion() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum);

  switch (randomNum) {
    case 1:
      binaryToDecimal();
      break;
    case 2:
      binaryToHex();
      break;
    case 3:
      decimalToBinary();
      break;
    case 4:
      decimalToHex();
      break;
    case 5:
      hexToBinary();
      break;
    case 6:
      hexToDecimal();
      break;
  }
}

btnGen.addEventListener(`click`, () => {
  generateQuestion();
});

// const showQuestion = document.querySelector(`.show-question`);

// function appendQuestion(str, num) {
//   const message = document.createElement(`p`);
//   const showNum = document.createElement(`p`);
//   let convertTo = ``;

//   switch (num) {
//     case 1:
//     case 6:
//       convertTo = `decimal`;
//       break;
//     case 2:
//     case 4:
//       convertTo = `hex`;
//       break;
//     case 3:
//     case 5:
//       convertTo = `binary`;
//       break;
//   }

//   message.textContent = `Convert to ${convertTo}:`;
//   showNum.textContent = str;
//   showQuestion.appendChild(message);
//   showQuestion.appendChild(showNum);
// }

"use strict";

const btnGen = document.querySelector(`.btn-generate`);

const binaryCols = [
  Math.pow(2, 15),
  Math.pow(2, 14),
  Math.pow(2, 13),
  Math.pow(2, 12),
  Math.pow(2, 11),
  Math.pow(2, 10),
  Math.pow(2, 9),
  Math.pow(2, 8),
  Math.pow(2, 7),
  Math.pow(2, 6),
  Math.pow(2, 5),
  Math.pow(2, 4),
  Math.pow(2, 3),
  Math.pow(2, 2),
  Math.pow(2, 1),
  Math.pow(2, 0),
];

const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Number functions
function createBinaryNumber() {
  const numBits = Math.floor(Math.random() * 16) + 1;
  let binaryNum = [];
  for (let i = 0; i < numBits; i++) {
    const bit = Math.floor(Math.random() * 2);
    binaryNum.push(bit);
  }
  return binaryNum;
}

function createBinaryColumns(binaryNum) {
  let binaryColsCopy = Array.from(binaryCols);
  binaryColsCopy.reverse();
  binaryColsCopy.length = binaryNum.length;
  binaryColsCopy.reverse();
  return binaryColsCopy;
}

// Convertor functions
function binaryDecimal() {
  console.log(`Binary to Decimal`);

  const binaryNum = createBinaryNumber();

  const binaryColsCopy = createBinaryColumns(binaryNum);
  console.log(`Convert to binary: ${binaryNum.join(``)}`);

  const decimalNum = convertToDecimal(binaryNum, binaryColsCopy);
  console.log(`Answer: ${decimalNum}`);
}

function binaryHex() {
  console.log(`Binary to Hexadecimal`);

  // Create binary number
  const binaryNum = createBinaryNumber();
  console.log(binaryNum);

  // Split binary number
  let newBinaryNums = [];
  for (let i = binaryNum.length - 1; i >= 0; i--) {
    if (i % 4 === 0) {
      let newArr = [];
      for (let i = 1; i <= 4; i++) {
        newArr.push(binaryNum.pop());
        newArr = newArr.filter((num) => {
          return num !== undefined;
        });
      }
      newBinaryNums.push(newArr.reverse());
    } else continue;
  }
  console.log(newBinaryNums);

  // Create binary columns
  const binaryColsCopy = [];
  newBinaryNums.forEach((num) => {
    const cols = createBinaryColumns(num);
    binaryColsCopy.push(cols);
  });
  console.log(binaryColsCopy);

  // Convert to decimal
}

function decimalBinary() {
  console.log(`Decimal to Binary`);
}
function decimalHex() {
  console.log(`Decimal to Hexadecimal`);
}
function hexBinary() {
  console.log(`Hexadecimal to Binary`);
}
function hexDecimal() {
  console.log(`Hexadecimal to Decimal`);
}

function generateQuestion() {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum);

  switch (randomNum) {
    case 1:
      binaryDecimal();
      break;
    case 2:
      binaryHex();
      break;
    case 3:
      decimalBinary();
      break;
    case 4:
      decimalHex();
      break;
    case 5:
      hexBinary();
      break;
    case 6:
      hexDecimal();
      break;
  }
}

btnGen.addEventListener(`click`, () => {
  generateQuestion();
});

binaryHex();

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

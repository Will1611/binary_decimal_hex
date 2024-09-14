"use strict";

const btnGen = document.querySelector(`.btn-generate`);
const decimalMax = 65535;

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

function convertBinaryToDecimal(binaryNum, binaryColsCopy) {
  let decimalNum = 0;
  for (let i = 0; i < binaryNum.length; i++) {
    if (binaryNum[i] === 1) {
      decimalNum += binaryColsCopy[i];
    }
  }
  return decimalNum;
}

function createDecimalNumber() {
  return Math.floor(Math.random() * decimalMax) + 1;
}

function binaryDecimal() {
  console.log(`Binary to Decimal`);

  const binaryNum = createBinaryNumber();

  const binaryColsCopy = createBinaryColumns(binaryNum);
  console.log(`Convert to binary: ${binaryNum.join(``)}`);

  const decimalNum = convertBinaryToDecimal(binaryNum, binaryColsCopy);
  console.log(`Answer: ${decimalNum}`);
}

function binaryHex() {
  console.log(`Binary to Hexadecimal`);

  // Generate binary number
  const binaryNum = createBinaryNumber();
  console.log(`Convert to hexadecimal: ${binaryNum.join(``)}`);

  // Split binary number
  const newBinaryNums = [];
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

  // Create binary columns
  const binaryColsCopy = [];
  newBinaryNums.forEach((num) => {
    binaryColsCopy.push(createBinaryColumns(num));
  });

  // Convert to decimal
  const decimalNums = [];
  for (let i = 0; i < newBinaryNums.length; i++) {
    decimalNums.push(
      convertBinaryToDecimal(newBinaryNums[i], binaryColsCopy[i])
    );
  }

  // Convert to hex
  const hexNum = [];
  for (let i = 0; i < decimalNums.length; i++) {
    if (decimalNums[i] !== 0) {
      hexNum.push(hexValues[decimalNums[i] - 1]);
    } else hexNum.push(0);
  }
  const answer = hexNum.reverse().join(``);
  console.log(`Answer is: ${answer}`);
}

function decimalBinary() {
  console.log(`Decimal to Binary`);

  // Generate decimal number
  let decimalNum = createDecimalNumber();
  console.log(binaryCols);
  console.log(`Convert to binary: ${decimalNum}`);

  const binaryNum = [];
  for (let col of binaryCols) {
    if (col <= decimalNum) {
      console.log(`${decimalNum} - ${col} = ${(decimalNum -= col)}`, col);
    }
  }
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

decimalBinary();

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

// Clear up variable declarations + add init() function
// Optimize functions + add default parameters
// Get rid of cols arrays and generate dynamically

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

const hexCols = [
  Math.pow(16, 5),
  Math.pow(16, 4),
  Math.pow(16, 3),
  Math.pow(16, 2),
  Math.pow(16, 1),
  Math.pow(16, 0),
];

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function createBinaryNumber() {
  const numBits = Math.floor(Math.random() * 16) + 1;
  let binaryNum = [];
  for (let i = 0; i < numBits; i++) {
    const bit = Math.floor(Math.random() * 2);
    binaryNum.push(bit);
  }
  if (!binaryNum.includes(1)) {
    binaryNum.push(1);
  }
  return binaryNum;
}

function createBinaryColumns(array) {
  let binaryColsCopy = Array.from(binaryCols);
  binaryColsCopy.reverse();
  binaryColsCopy.length = array.length;
  binaryColsCopy.reverse();

  return binaryColsCopy;
}

function createHexColumns(array) {
  const hexColsCopy = Array.from(hexCols);
  hexColsCopy.reverse();
  hexColsCopy.length = array.length;
  hexColsCopy.reverse();
  return hexColsCopy;
}

function createDecimalNumber() {
  return Math.floor(Math.random() * 65535) + 1;
}

function createHexNumber() {
  const hexNum = [];
  const numValues = Math.floor(Math.random() * 4) + 1;
  for (let i = 1; i <= numValues; i++) {
    hexNum.push(hexValues[Math.floor(Math.random() * 16)]);
  }
  return hexNum;
}

function convertBinaryToDecimal(array1, array2) {
  let decimalNum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 1) {
      decimalNum += array2[i];
    }
  }
  return decimalNum;
}

function convertDecimalToBinary(num) {
  const binaryNum = [];
  for (let col of binaryCols) {
    if (col <= num) {
      num -= col;
      binaryNum.push(1);
    } else binaryNum.push(0);
  }
  return binaryNum;
}

function convertBinaryToHex(array) {
  // Split binary number
  const newBinaryNums = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (i % 4 === 0) {
      let newArr = [];
      for (let i = 1; i <= 4; i++) {
        newArr.push(array.pop());
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
      hexNum.push(hexValues[decimalNums[i]]);
    } else hexNum.push(0);
  }
  return hexNum;
}

function convertHexToDecimal(array) {
  let decimalConversion = [];
  for (let value of array) {
    if (typeof value === "string") {
      value = Number(hexValues.indexOf(value));
    }
    decimalConversion.push(value);
  }
  return decimalConversion;
}

function binaryToDecimal() {
  console.log(`Binary to Decimal`);

  const binaryNum = createBinaryNumber();

  const binaryColsCopy = createBinaryColumns(binaryNum);
  console.log(`Convert to decimal: ${binaryNum.join(``)}`);

  const decimalNum = convertBinaryToDecimal(binaryNum, binaryColsCopy);
  console.log(`Answer: ${decimalNum}`);
}

function binaryToHex() {
  console.log(`Binary to Hexadecimal`);

  // Generate binary number
  const binaryNum = createBinaryNumber();
  console.log(`Convert to hexadecimal: ${binaryNum.join(``)}`);

  const hexNum = convertBinaryToHex(binaryNum);

  console.log(hexNum);

  while (hexNum[hexNum.length - 1] === 0) {
    hexNum.pop();
  }
  const answer = hexNum.reverse().join(``);
  console.log(`Answer is: ${answer}`);
}

function decimalToBinary() {
  console.log(`Decimal to Binary`);

  // Generate decimal number
  let decimalNum = createDecimalNumber();
  console.log(`Convert to binary: ${decimalNum}`);

  // Convert to binary
  const binaryNum = convertDecimalToBinary(decimalNum);

  // Remove extra zeros
  while (binaryNum[0] === 0) {
    binaryNum.shift();
  }

  // Show answer
  const answer = binaryNum.join(``);
  console.log(`The answer is: ${answer}`);
}

function decimalToHex() {
  console.log(`Decimal to Hexadecimal`);
  let decimalNum = createDecimalNumber();
  console.log(`Convert to hexadecimal: ${decimalNum}`);
  const binaryNum = convertDecimalToBinary(decimalNum);
  const hexNum = convertBinaryToHex(binaryNum);
  const answer = hexNum.reverse().join(``);
  console.log(`Answer is: ${answer}`);
}
function hexToBinary() {
  console.log(`Hexadecimal to Binary`);
  const hexNum = createHexNumber();

  console.log(`Convert to binary: ${hexNum.join(``)}`);

  // Convert hex letters to decimal equivalents

  //Create binary number
  let binaryNum = [];
  for (let i = 0; i < decimalConversion.length; i++) {
    binaryNum.push(convertDecimalToBinary(decimalConversion[i]));
    while (binaryNum[i][0] === 0 && binaryNum[i].length > 4) {
      binaryNum[i].shift();
    }
  }

  // Unpack binaryNum into single array
  let answer = [];
  for (let byte of binaryNum) {
    answer.push(...byte);
  }

  // Show answer
  console.log(`Answer is: ${answer.join(``)}`);
}
function hexToDecimal() {
  console.log(`Hexadecimal to Decimal`);
  const hexNum = createHexNumber();

  console.log(`Convert to decimal: ${hexNum.join(``)}`);
  const decimalConversion = convertHexToDecimal(hexNum);

  // Create hex columns
  const hexColsCopy = createHexColumns(decimalConversion);
  console.log(hexCols);
  console.log(hexColsCopy);
}

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

hexToDecimal();

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

"use strict";

import {
  createBinaryNumber,
  createHexNumber,
  createDecimalNumber,
  createBinaryColumns,
  createHexColumns,
} from "./number_functions.js";

import {
  convertBinaryToDecimal,
  convertBinaryToHex,
  convertDecimalToBinary,
  convertHexToDecimal,
} from "./conversion_functions.js";

export function binaryToDecimal() {
  console.log(`Binary to Decimal`);

  const binaryNum = createBinaryNumber();

  const binaryColsCopy = createBinaryColumns(binaryNum);
  console.log(`Convert to decimal: ${binaryNum.join(``)}`);

  const decimalNum = convertBinaryToDecimal(binaryNum, binaryColsCopy);
  console.log(`Answer: ${decimalNum}`);
}

export function binaryToHex() {
  console.log(`Binary to Hexadecimal`);

  // Generate binary number
  const binaryNum = createBinaryNumber();
  console.log(`Convert to hexadecimal: ${binaryNum.join(``)}`);

  const hexNum = convertBinaryToHex(binaryNum);

  while (hexNum[hexNum.length - 1] === 0) {
    hexNum.pop();
  }
  const answer = hexNum.reverse().join(``);
  console.log(`Answer is: ${answer}`);
}

export function decimalToBinary() {
  console.log(`Decimal to Binary`);

  let decimalNum = createDecimalNumber();
  console.log(`Convert to binary: ${decimalNum}`);

  const binaryNum = convertDecimalToBinary(decimalNum);

  while (binaryNum[0] === 0) {
    binaryNum.shift();
  }

  const answer = binaryNum.join(``);
  console.log(`The answer is: ${answer}`);
}

export function decimalToHex() {
  console.log(`Decimal to Hexadecimal`);
  let decimalNum = createDecimalNumber();
  console.log(`Convert to hexadecimal: ${decimalNum}`);
  const binaryNum = convertDecimalToBinary(decimalNum);
  const hexNum = convertBinaryToHex(binaryNum);
  const answer = hexNum.reverse().join(``);
  console.log(`Answer is: ${answer}`);
}
export function hexToBinary() {
  console.log(`Hexadecimal to Binary`);
  const hexNum = createHexNumber();
  const decimalConversion = convertHexToDecimal(hexNum);
  console.log(`Convert to binary: ${hexNum.join(``)}`);
  let binaryNum = [];
  for (let i = 0; i < decimalConversion.length; i++) {
    binaryNum.push(convertDecimalToBinary(decimalConversion[i]));
    while (binaryNum[i][0] === 0 && binaryNum[i].length > 4) {
      binaryNum[i].shift();
    }
  }
  let answer = [];
  for (let byte of binaryNum) {
    answer.push(...byte);
  }
  console.log(`Answer is: ${answer.join(``)}`);
}

export function hexToDecimal() {
  console.log(`Hexadecimal to Decimal`);
  const hexNum = createHexNumber();

  console.log(`Convert to decimal: ${hexNum.join(``)}`);
  const decimalConversion = convertHexToDecimal(hexNum);
  console.log(decimalConversion);

  const hexColsCopy = createHexColumns(decimalConversion);
  console.log(hexColsCopy);
}

"use strict";

import { createBinaryColumns } from "./number_functions.js";

import { binaryCols, hexValues } from "./variables.js";

export function convertBinaryToDecimal(array1, array2) {
  let decimalNum = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 1) {
      decimalNum += array2[i];
    }
  }
  return decimalNum;
}

export function convertDecimalToBinary(num) {
  const binaryNum = [];
  for (let col of binaryCols) {
    if (col <= num) {
      num -= col;
      binaryNum.push(1);
    } else binaryNum.push(0);
  }
  return binaryNum;
}

export function convertBinaryToHex(array) {
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

export function convertHexToDecimal(array) {
  let decimalConversion = [];
  for (let value of array) {
    if (typeof value === "string") {
      value = Number(hexValues.indexOf(value));
    }
    decimalConversion.push(value);
  }
  return decimalConversion;
}

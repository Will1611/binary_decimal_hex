"use strict";

import { binaryCols, hexCols, hexValues } from "./variables.js";

export function createBinaryNumber() {
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

export function createBinaryColumns(array) {
  let binaryColsCopy = Array.from(binaryCols);
  binaryColsCopy.reverse();
  binaryColsCopy.length = array.length;
  binaryColsCopy.reverse();

  return binaryColsCopy;
}

export function createHexColumns(array) {
  const hexColsCopy = Array.from(hexCols);
  hexColsCopy.reverse();
  hexColsCopy.length = array.length;
  hexColsCopy.reverse();
  return hexColsCopy;
}

export function createDecimalNumber() {
  return Math.floor(Math.random() * 65535) + 1;
}

export function createHexNumber() {
  const hexNum = [];
  const numValues = Math.floor(Math.random() * 4) + 1;
  for (let i = 1; i <= numValues; i++) {
    hexNum.push(hexValues[Math.floor(Math.random() * 16)]);
  }
  return hexNum;
}

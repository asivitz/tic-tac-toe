import React from 'react';
import App from './App';

// Import game logic
import Line from './src/GameLogic/Line';
import FourCorners from './src/GameLogic/FourCorners';

import renderer from 'react-test-renderer';


// ****************************
// ****************************
//
// Unit Tests for Line Tests
//
// ****************************
// ****************************


var lineTestLocation = {x: 0, y: 0};

var lineTestOne = [
    ["X", "X", "X", "X"],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
];

var lineTestTwo = [
  ["X", "", "", ""],
  ["X", "", "", ""],
  ["X", "", "", ""],
  ["X", "", "", ""],
];

var lineTestThree = [
  ["X", "", "", ""],
  ["O", "", "", ""],
  ["X", "", "", ""],
  ["O", "", "", ""],
];


var lineTestFour = [
  ["X", "", "", ""],
  ["O", "X", "", ""],
  ["X", "", "X", ""],
  ["O", "", "", "X"],
];


var lineTestFive = [
  ["X", "", "", "O"],
  ["O", "", "O", ""],
  ["X", "O", "", ""],
  ["O", "", "", ""],
];

it('Horizontal Line', () => {
  const test = Line(lineTestOne, lineTestLocation);
  expect(test).toBe(1);
});

it('Vertical Line', () => {
  const test = Line(lineTestTwo, lineTestLocation);
  expect(test).toBe(1);
});

it('No Win', () => {
  const test = Line(lineTestThree, lineTestLocation);
  expect(test).toBe(0);
});

it('Diagonal Line', () => {
  const test = Line(lineTestFour, lineTestLocation);
  expect(test).toBe(1);
});

it('Inverse Diagonal Line', () => {
  const test = Line(lineTestFive, lineTestLocation);
  expect(test).toBe(1);
});

// ****************************
// ****************************
//
// Unit Tests for Four Corners Tests
//
// ****************************
// ****************************


var FourCornersTestOne = [
  ["X", "X", "O", "X"],
  ["", "", "", ""],
  ["", "", "", ""],
  ["X", "", "", "X"],
];

var FourCornersTestTwo = [
  ["X", "X", "O", "O"],
  ["", "", "", ""],
  ["", "", "", ""],
  ["O", "", "", "O"],
];

var FourCornersTestThree = [
  ["X", "X", "O", "X"],
  ["", "", "", ""],
  ["", "", "", ""],
  ["X", "", "", "O"],
];

it('Four Corners', () => {
  const test = FourCorners(FourCornersTestOne, lineTestLocation);
  expect(test).toBe(1);
});

it('No Win', () => {
  const test = FourCorners(FourCornersTestTwo, lineTestLocation);
  expect(test).toBe(0);
});

it('No Win', () => {
  const test = FourCorners(FourCornersTestThree, lineTestLocation);
  expect(test).toBe(0);
});



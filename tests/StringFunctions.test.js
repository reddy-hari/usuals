const usuals = require('../src/Main.js');

test('Test for function to check if a string is empty', () => {
  let emptyString = ''
  expect(usuals.stringFunctions.isStringEmpty(emptyString)).toBe(true);
});

test('Test for function to generate a random alphanumeric string with mixed case characters', () => {
  let randomLength = usuals.numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = usuals.stringFunctions.generateAlphaNumericUpperOrLowerCaseString(randomLength)
  const stringRegEx = /^[A-Za-z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random alphanumeric string with upper case characters', () => {
  let randomLength = usuals.numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = usuals.stringFunctions.generateAlphaNumericUpperCaseString(randomLength)
  const stringRegEx = /^[A-Z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random alphanumeric string with lower case characters', () => {
  let randomLength = usuals.numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = usuals.stringFunctions.generateAlphaNumericLowerCaseString(randomLength)
  const stringRegEx = /^[a-z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random string with upper case characters', () => {
  let randomLength = usuals.numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = usuals.stringFunctions.generateUpperCaseString(randomLength)
  const stringRegEx = /^[A-Z]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random string with upper case characters', () => {
  let randomLength = usuals.numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = usuals.stringFunctions.generateLowerCaseString(randomLength)
  const stringRegEx = /^[a-z]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});
import { stringFunctions, numberFunctions } from 'usuals';

test('Test for function to check if a string is empty', () => {
  let emptyString = ''
  expect(stringFunctions.isStringEmpty(emptyString)).toBe(true);
});

test('Test for function to generate a random alphanumeric string with mixed case characters', () => {
  let randomLength = numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = stringFunctions.generateAlphaNumericUpperOrLowerCaseString(randomLength)
  const stringRegEx = /^[A-Za-z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random alphanumeric string with upper case characters', () => {
  let randomLength = numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = stringFunctions.generateAlphaNumericUpperCaseString(randomLength)
  const stringRegEx = /^[A-Z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random alphanumeric string with lower case characters', () => {
  let randomLength = numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = stringFunctions.generateAlphaNumericLowerCaseString(randomLength)
  const stringRegEx = /^[a-z0-9]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random string with upper case characters', () => {
  let randomLength = numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = stringFunctions.generateUpperCaseString(randomLength)
  const stringRegEx = /^[A-Z]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});

test('Test for function to generate a random string with upper case characters', () => {
  let randomLength = numberFunctions.generateRandomNumberInRange(1, 20)
  let generatedString = stringFunctions.generateLowerCaseString(randomLength)
  const stringRegEx = /^[a-z]+$/i
  expect(generatedString.length).toBe(randomLength)
  expect(generatedString).toMatch(stringRegEx)
});
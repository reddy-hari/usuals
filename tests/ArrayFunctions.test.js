import { numberFunctions, arrayFunctions } from '../src/Main.js';

test('Test for function to check if the first occurrence of an element is deleted from an array', () => {
    let randomArray = []
    let i = 0
    while (i <= numberFunctions.generateRandomNumberInRange(1, 10)) {
        randomArray.push(numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    let elementToDelete = randomArray[numberFunctions.generateRandomNumberInRange(0, randomArray.length - 1)]
    let indexOfElementToDelete = randomArray.indexOf(elementToDelete)
    arrayFunctions.deleteElement(randomArray, elementToDelete)
    expect(randomArray[indexOfElementToDelete]).not.toBe(elementToDelete);
});

test('Test for function to check if the first occurrence of an element is deleted from an array', () => {
    let randomArray = []
    let i = 0
    while (i <= numberFunctions.generateRandomNumberInRange(1, 10)) {
        randomArray.push(numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    let elementToDelete = randomArray[numberFunctions.generateRandomNumberInRange(0, randomArray.length - 1)]
    arrayFunctions.deleteAllElementOccurrences(randomArray, elementToDelete)
    expect(randomArray).not.toContain(elementToDelete);
});
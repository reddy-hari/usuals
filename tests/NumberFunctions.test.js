const usuals = require('../src/Main.js');

test('Test for function to check if a random generated number is in the specified range', () => {
    let randomNumber_1 = usuals.numberFunctions.generateRandomNumberInRange(0, 500)
    let randomNumber_2 = usuals.numberFunctions.generateRandomNumberInRange(501, 1000)
    let randomNumber = usuals.numberFunctions.generateRandomNumberInRange(randomNumber_1, randomNumber_2)
    expect(randomNumber).toBeGreaterThan(randomNumber_1)
    expect(randomNumber).toBeLessThan(randomNumber_2)
    expect(randomNumber_1 < randomNumber < randomNumber_2).toBeTruthy()
});
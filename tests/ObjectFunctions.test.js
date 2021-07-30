const usuals = require('../src/Main.js');

test('Test for function to check if an object is empty', () => {
    let emptyObject = {}
    expect(usuals.objectFunctions.isObjectEmpty(emptyObject)).toBe(true);
});
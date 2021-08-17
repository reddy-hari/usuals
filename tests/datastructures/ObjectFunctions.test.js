import { objectFunctions } from 'usuals';

test('Test for function to check if an object is empty', () => {
    let emptyObject = {}
    expect(objectFunctions.isObjectEmpty(emptyObject)).toBe(true);
});
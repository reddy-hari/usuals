const usuals = require('../src/Main.js');

test('Test for function to create a Linked List', () => {
    let l1 = []
    let l2 = []
    let i = 0
    while (i <= usuals.numberFunctions.generateRandomNumberInRange(1, 10)) {
        l1.push(usuals.numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    i = 0
    while (i <= usuals.numberFunctions.generateRandomNumberInRange(1, 10)) {
        l2.push(usuals.numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    let first = usuals.linkedListFunctions.createLinkedListFromArray(l1)
    let second = usuals.linkedListFunctions.createLinkedListFromArray(l2)
    expect(typeof (first)).toBe("object");
    expect(typeof (second)).toBe("object");
});
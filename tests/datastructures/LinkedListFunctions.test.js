import { numberFunctions, linkedListFunctions } from 'usuals';

test('Test for function to create a Linked List', () => {
    let l1 = []
    let l2 = []
    let i = 0
    while (i <= numberFunctions.generateRandomNumberInRange(1, 10)) {
        l1.push(numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    i = 0
    while (i <= numberFunctions.generateRandomNumberInRange(1, 10)) {
        l2.push(numberFunctions.generateRandomNumberInRange(1, 10))
        i++
    }
    let first = linkedListFunctions.createSinglyLinkedListFromArray(l1)
    let second = linkedListFunctions.createSinglyLinkedListFromArray(l2)
    expect(typeof (first)).toBe("object");
    expect(typeof (second)).toBe("object");
});
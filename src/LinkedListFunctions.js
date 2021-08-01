
// Definition of a Singly Node 
class SinglyListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
* Creating a Linked List
* @param {Array} arr 
* @returns the head node of a Linked List
*/
exports.createSinglyLinkedListFromArray = (arr) => {
    let head = null
    let randomNode = null
    arr.forEach(el => {
        if (!head) {
            head = new SinglyListNode(el)
            randomNode = head
        } else {
            randomNode.next = new SinglyListNode(el)
            randomNode = randomNode.next
        }
    });
    return head
}
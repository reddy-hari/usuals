
// Definition of a Node 
class ListNode {
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
exports.createLinkedListFromArray = (arr) => {
    let head = null
    let randomNode = null
    arr.forEach(el => {
        if (!head) {
            head = new ListNode(el)
            randomNode = head
        } else {
            randomNode.next = new ListNode(el)
            randomNode = randomNode.next
        }
    });
    return head
}
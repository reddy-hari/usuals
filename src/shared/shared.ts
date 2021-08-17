export class SinglyListNode {
  val: any;
  next?: any;

  constructor(val: any, next?: any) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//piece of data -val
//reference to next node -null

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      newNode.next = null;
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    //return first el
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // print() {
  //   let temp = this.head;
  //   while (temp !== null) {
  //     process.stdout.write(temp.val + " ");
  //     temp = temp.next;
  //   }
  // }
}

// let first = new Node(3)
//first.next = new Node(4)
///first.next.next = new Node(5)

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list.pop());
console.log(list);
console.log(list.shift());
console.log(list);

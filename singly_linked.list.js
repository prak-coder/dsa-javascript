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
  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

// let first = new Node(3)
//first.next = new Node(4)
///first.next.next = new Node(5)

let list = new SinglyLinkedList();
list.push(25);
list.push(26);
list.push(27);
list.push(28);

console.log(list.print());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// const newNode = new Node(10)
// newNode.next = new Node(20)
// newNode.next.next = new Node(30)

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
      process.stdout.write(temp.value + " ");
      temp = temp.next;
    }
    return;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
console.log(list);
console.log(list.print());

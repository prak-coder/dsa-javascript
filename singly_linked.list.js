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
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //10 20 30 0
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

console.log(list.unshift(5));
console.log(list.unshift(4));
console.log(list.unshift(3));
console.log(list.get(0));
console.log(list.get(list.length - 1));
console.log(list.get(-5));
console.log(list.get(list.length + 1));
console.log(list.set(1, "troy"));
console.log(list.print());

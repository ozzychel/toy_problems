/*
Implementation the MyCircularQueue class:
MyCircularQueue(k): Initializes the object with the size of the queue to be k.
int Front(): Gets the front item from the queue. If the queue is empty, return -1.
int Rear(): Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value): Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue(): Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty(): Checks whether the circular queue is empty or not.
boolean isFull(): Checks whether the circular queue is full or not.
*/

class MyCircularQueue {
  constructor(k) {
    this.storage = [];
    this.max = k;
  }
  isFull = () => this.storage.length === this.max;
  isEmpty = () => this.storage.length === 0;
  enQueue = (value) => this.isFull() ? false : this.storage.push(value) ? true : null;
  deQueue = () => this.isEmpty() ? false : this.storage.shift() ? true : null;
  Front = () => this.isEmpty() ? -1 : this.storage[0];
  Rear = () => this.isEmpty() ? -1 : this.storage[this.storage.length - 1];
}

// var MyCircularQueue = function (k) {
//   this.storage = [];
//   this.max = k;
// }

// MyCircularQueue.prototype.Front = function () {
//   return this.isEmpty() ? -1 : this.storage[0];
// }

// MyCircularQueue.prototype.Rear = function () {
//   return this.isEmpty() ? -1 : this.storage[this.storage.length - 1];
// }

// MyCircularQueue.prototype.enQueue = function (value) {
//   return this.isFull() ? false : this.storage.push(value) ? true : null;
// }

// MyCircularQueue.prototype.deQueue = function () {
//   return this.isEmpty() ? false : this.storage.shift() ? true : null;
// }

// MyCircularQueue.prototype.isEmpty = function () {
//   return this.storage.length === 0;
// }

// MyCircularQueue.prototype.isFull = function () {
//   return this.storage.length === this.max;
// }

var cq = new MyCircularQueue(3)
console.log(cq)
console.log(cq.isFull())  // false
console.log(cq.isEmpty()) // true
console.log(cq.enQueue(1)) // true
console.log(cq.enQueue(2)) // true
console.log(cq.enQueue(3)) // true
console.log(cq.isFull())   // true
console.log(cq.isEmpty())  // false
console.log(cq.enQueue(4)) // false
console.log(cq.Front()) // 1
console.log(cq.Rear()) // 3
console.log(cq.deQueue()) // true
console.log(cq.enQueue(4)) // true
console.log(cq.Front()) // 2
console.log(cq.Rear()) // 4



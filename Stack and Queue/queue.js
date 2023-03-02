/*
  not an ideal implementation of a queue
   To run;
    node queue.js depth_of_queue
*/

class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(item) {
      this.queue.push(item);
    }
    dequeue() {
      return this.queue.shift();
    }
  }


//testing queue
var args = process.argv;
var length = args[2];
var myQueue = new Queue();

for (i=0; i<=length; i++) {
    myQueue.enqueue(Math.round(Math.random()*100))
}

console.log(myQueue.queue);

console.log(myQueue.dequeue());
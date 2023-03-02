/*
 simple stack implementation
 To run;
  node stack.js depth_of_stack
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
}

//testing stack
var args = process.argv;
var length = args[2];
var myStack = new Stack();

for (i=0; i<=length; i++) {
    myStack.push(Math.round(Math.random()*100))
}

console.log(myStack.stack);

console.log(myStack.pop());
/*
 Find midpoint of a linked list (in this case, a JSON object)
 to run:
    node linked_list_example.js 'depth of linked list'
 */

var args = process.argv;
var flatten = require('flat');

class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}

function populateLinkedList () {
    let data;
    let next;
    for (i=0; i<length; i++) {
        data = Math.floor(Math.random() * 100);
        next = list.head;
        list.head = new Node(Math.floor(Math.random() * 100), list.head);
    }
}

function findMidPoint () {
    let obj = flatten(list);
    console.log(obj);
    let midPoint = Math.floor(Object.keys(obj).length/2)
    console.log(midPoint);
    let keys = Object.keys(obj)[midPoint].split(".");
    console.log(keys);
    obj = list;
    for (let i = 0; i < keys.length-1; i++) {
        obj = obj[keys[i]];
    }
    console.log(obj.data);
}


var length = args[2];
var list = new LinkedList();
populateLinkedList();
findMidPoint();


/*
 Find midpoint of a linked list (in this case, a JSON object)
 */


var flatten = require('flat');

const list = {
    head: {
        value: 6,
        next: {
            value: 10,                                             
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                    }
                }
            }
        }
    };

var obj = flatten(list);
var midPoint = Math.floor(Object.keys(flatten(list)).length/2)
console.log(mid);
var keys = Object.keys(obj)[mid].split(".");
obj = list;
for (let i = 0; i < keys.length-1; i++) {
    obj = obj[keys[i]];
}
console.log(obj.value);

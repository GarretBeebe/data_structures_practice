/* 
    Find a key and value in a JSON Object based on a provided value
*/

var _ = require('underscore');
var flatten = require('flat')
var ARGS = process.argv;
var json = require(process.cwd() + '/generated.json');
var flatObj = flatten(json);
console.log(flatten(json));

_.each(flatObj, function(value, key){
    if (value === ARGS[2]) {
        console.log(key + " : " + value);
    }
});



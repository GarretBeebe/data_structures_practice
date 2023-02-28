/* 
    Find a key and value in a JSON Object based on a provided value
*/
var _ = require('underscore');
var flatten = require('flat')

var args = process.argv;
var json = require(process.cwd() + '/generated.json');
var flatJSON = flatten(json);
var keys = [];

_.each(flatJSON, function(value, key){
    let obj = json;
    let test = String(value);
    if (test.includes(args[2])===true) {
        console.log(key + " : " + value);
        keys = key.split(".");
        for (let i = 0; i < keys.length; i++) {
            obj = obj[keys[i]];
        }
        console.log(obj);
    }
});



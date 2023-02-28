/* 
    Find a key and value in a JSON Object based on a provided value.
    To run:
        node json_string_example.js 'your search string'
*/
var _ = require('underscore');
var flatten = require('flat');

function log(key , value) {
    console.log(key);
    console.log(value);
}

var args = process.argv;
var json = require(process.cwd() + '/data/generated.json');
var flatJSON = flatten(json);

_.each(flatJSON, function(value, key){
    let keys;
    let obj = json;
    if (String(value).includes(args[2])===true) {
        keys = key.split(".");
        if (keys.length === 1) {
            log(keys[0], value);
        }
        else {
            for (let i = 0; i < keys.length-1; i++) {
                obj = obj[keys[i]];
            }
            log(keys[0], obj);
        }
    }
});



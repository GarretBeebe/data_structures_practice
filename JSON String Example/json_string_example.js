/* 
    Find a key and value in a JSON Object based on a provided value
*/

var _ = require('underscore');
var ARGS = process.argv;
var json = require(process.cwd() + '/generated.json');


_.each(json, function(obj){
    _.each(obj, function(value, key){
        if (value === ARGS[2]) {
            console.log(key + " : " + value);
        }
    });
});


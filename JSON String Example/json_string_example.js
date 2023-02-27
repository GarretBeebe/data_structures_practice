/* 
    Find a string in a JSON Object
*/

const { JsonScout } = require("json-scout");
var ARGS = process.argv;
var json = require(process.cwd() + '/generated.json');
//console.log(json);

const jScout = new JsonScout(json);
console.log(jScout.scoutOneByValue("SLOGANAUT"));

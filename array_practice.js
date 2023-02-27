/*
    Script takes two arguments: array length, and number of elements to randomly remove from the array.
    Returns the array, the missing elements, and the missing values.
    To run:
        node array_practice.js length number_missing
*/

var ARGS = process.argv;
var ARR;

function init() {
    let length = ARGS[2];
    let missingElements = ARGS[3]
    ARR = Array.from({length:length}, (_, index) => index +1);
    for (let i = 0; i < missingElements; i++) {
        delete ARR[Math.floor(Math.random() * length) + 1];
    }
    console.log(ARR);
}

function findMissingElements() {
    let currentElement;
    let missingElements = [];

    for (let i = 0; i < ARR.length; i++) {
        if (ARR[i] === '' || ARR[i] === undefined) { 
            currentElement = i;
            missingElements.push(i);
        }
    }

    for (let i = 0; i < missingElements.length; i++) {
        console.log ("Missing element is: " + missingElements[i]);
        console.log ("Mising value is: " + (ARR[missingElements[i] - 1] + 1));
    }
    
}


init();
findMissingElements();
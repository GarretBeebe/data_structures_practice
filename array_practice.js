/*
    Script takes two arguments: array length, and number of elements to randomly remove from the array.
    Returns the array, the missing elements, and the missing values.
    To run:
        node array_practice.js length number_of_missing_elements
*/

var ARGS = process.argv;
var ARR;

function init() {
    let length = ARGS[2];
    let missingElements = ARGS[3]
    ARR = Array.from({length:length}, (_, index) => index +1);
    for (let i = 0; i < missingElements; i++) {
        let randomElement = Math.floor(Math.random() * length);
        delete ARR[randomElement];
        console.log("Deleting element: " + randomElement);
    }
    console.log(ARR);
}

function findMissingElements() {
    let index;
    let missingElements = [];
    let value;

    for (let i = 0; i < ARR.length; i++) {
        if (ARR[i] === '' || ARR[i] === undefined) { 
            missingElements.push(i);
        }
    }

    for (let i = 0; i < missingElements.length; i++) {
        index = missingElements[i];
        if (index === 0) {
            ARR[index] = 1;
            value = 1;
        }
        else {
            ARR[index] = ARR[index - 1] + 1;
            value = ARR[index - 1] + 1;
        }
        console.log ("Missing element is: " + index);
        console.log ("Mising value is: " + value);
        
    }
    
}

init();
findMissingElements();
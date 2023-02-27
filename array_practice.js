/*
    Script takes two arguments: array length, and number of elements to randomly remove from the array.
    Returns the array, the missing elements, and the missing values.
    To run:
        node array_practice.js length number_missing
*/


function init(length, number_missing) {
    arr = Array.from({length:length}, (_, index) => index +1);
    for (i = 0; i < number_missing; i++) {
        delete arr[Math.floor(Math.random() * length) + 1];
    }
    console.log(arr);
}

function FindMissingElements(arr) {
    let current_element;
    let missing_elements = [];

    for (j = 0; j < arr.length; j++) {
        if (arr[j] === '' || arr[j] === undefined) { 
            current_element = j;
            missing_elements.push(j);
        }
    }

    for (k = 0; k < missing_elements.length; k++) {
        console.log ("Missing element is: " + missing_elements[k]);
        console.log ("Mising value is: " + (arr[missing_elements[k] - 1] + 1));
    }
    
}

const args = process.argv;
console.log(args);
var arr;
init(args[2], args[3]);
FindMissingElements(arr);
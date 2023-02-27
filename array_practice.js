/*
    Script takes two arguments: array length, and number of elements to randomly remove from the array.
    Returns the array, the missing elements, and the missing values.
    To run:
        node array_practice.js length number_missing
*/


function init(length, number_missing) {
    const arr = Array.from({length:length}, (_, index) => index +1);
    for (i = 0; i < number_missing; i++) {
        var element = Math.floor(Math.random() * length) + 1;
        delete arr[element];
    }
    console.log(arr);
    return arr;
}

function FindMissingElements(arr) {
    var current_element = 0;
    var missing_elements = [];
    var missing_value = 0;

    for (j = 0; j < arr.length; j++) {
        if (arr[j] === '' || arr[j] === undefined) { 
            current_element = j;
            missing_elements.push(j);
        }
    }

    for (k = 0; k < missing_elements.length; k++) {
        missing_value = arr[missing_elements[k] - 1] + 1;
        console.log ("Missing element is: " + missing_elements[k]);
        console.log ("Mising value is: " + missing_value);
    }
    
}

const args = process.argv;
console.log(args);
const arr = init(args[2], args[3]);
FindMissingElements(arr);
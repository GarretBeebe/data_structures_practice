/*
    You have two strings. Both strings are series of numbers.
    Implement a function to check whether the second string is a valid pop sequence of the first string.

    Ex.
    "12345" "32145"
    "12345" "54321"
    "12345" "21543"

    to run:
        node string_manipulation.js
*/


var originalString = "12345"
var string2 = "32145"
var string3 = "54321"
var string4 = "21543"
var stringArray = [string2, string3, string4];

var array1 = originalString.split("");

function check (string) {
    let testArray = string.split("");
    let reverseArray = testArray.reverse();
    let reverseString = testArray.join('');

    if (reverseString==originalString) {
        return true
    }
    else {
        return false
    }

}


for (i=0; i<stringArray.length; i++) {
    console.log(stringArray[i] + " : " + check(stringArray[i]));
}
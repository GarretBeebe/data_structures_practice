var originalString = "12345"
var string2 = "32145"
var string3 = "54321"
var string4 = "21543"

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

var stringArray = [string2, string3, string4];

for (i=0; i<stringArray.length; i++) {
    console.log(stringArray[i] + " : " + check(stringArray[i]));
}
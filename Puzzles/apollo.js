/*

|
|
N                | gravity |
|                V         V
| ____ M ______

-----------GROUND-----------

initial case
1 0
0 1
1 0

edge I didn't account for
1 0
1 0 
0 1 
1 0 

*/

var outer = 3;
var inner = 1;
var myArray = [[1,0],[1,0],[0,1],[1,0]];

// this was working for my initial case
// for (i=0; i<outer; i++) {
//     for (j=0; j<inner; j++) {
//         if (myArray[i][j] == 0 && myArray[i][j]!=0) {
//             console.log("Block " + i + " " + j + " can move");
//         }
//         else {
//             console.log("Block " + i + " " + j + " can't move");
//         }
//     }
// }

/* edge I didn't account for
    1 0
    1 0 
    0 1 
    1 0 
*/

for (i=outer; i>=0; i--) {
    for (j=inner; j>=0; j--) {
        if (myArray[i][j] == 0) {
            for (k=j; k>=0; k--) {
                if (myArray[i][k]!=0 && i!=outer) {
                    console.log("Block " + i + " " + k + " can move");
                }
                else {
                    console.log("Block " + i + " " + k + " can't move");
                }
            }
        }
        // else if (myArray[i][j] != 0 && j!=inner) {
        //     console.log("Block " + i + " " + j + " can move");
        // }
    }
}


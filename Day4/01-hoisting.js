//Hoisting

//var hoisting

/* console.log(x);
var x=10 */

/* Explanation
var x is hoisted to the top of the code
Only the declaration is hoisted not the assignment */

//Internal working in JS x declaration is hoisted to the top of the code

/* var x
console.log(x);
var x=10 */



//let and const hoisting

/* console.log(y);
let y=10 */

/* Explanation
let and const is also hoisted but not initialized
hoisting happens in let and const but it throws reference error which is called as TDZ Temporal Dead Zone in you moderan JS */

//Internal working in JS x declaration is hoisted to the top of the code

/* let y
console.log(x);//Error*/

/* console.log(z);
const z=10 */

/* Same as above like let */

//Named function --> hoisting happens while calling the function

function sepBatch(){

    console.log("Hello Learners");
    console.log("Hello Learners");
    console.log("Hello Learners");
    
}




/* console.log("Hello Learners");
    console.log("Hello Learners");
    console.log("Hello Learners"); */

sepBatch()


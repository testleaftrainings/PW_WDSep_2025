//Named function:

// function funNam1(a,b) {
//     let c=a+b;
//     console.log(c);
//   // return c
// }
// funNam1(20,10)

//Anonymous function / Function expression : --> No hoisting

// let x ="10";

// let funNam2 = function () {
// console.log("Hello Team this is an anonymous function");
// }
// funNam2()

//Arrow function --> no hoisting

let funNam3 = () => { // fat arrow
console.log("Hello Team this is an arrow function");
}
funNam3()

//Single line arrow function

const funName4 = (a,b) => a+b
console.log(funName4(20,10))
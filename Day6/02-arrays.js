// //Using Array 

// let arrayValue1 = ["a","b","c","d","e"]
// let arrayNum = [1,2,3,4,5,"a"]

// /* 1.Dynamic in size
// Arrays in JS can grow or shrink in size as elements are added or removed

// 2.Heterogenous elements:
// Arrays can store different data types like strinf, numbers, objects*/


// //Using Array literal
// let arrayValue2 = ["a","b","c","d","e"]

// //Using array constructor/object 
// let arrayValue3 = new Array(5); // Create an array of 5 empty slots
// arrayValue3=["a","b","c","d","e"]

// //Methods related to array

// //1. push --> add one or more elements to the end of the array.

// let letters = ["a","b","c","d","e"];
// letters.push("f","g","h")
// console.log(letters);


// //2.pop --> remove only one from the end of the array

// letters.pop()
// console.log(letters);


// //3.shift --> remove only one element from the first part of the array

// letters.shift();
// console.log(letters);

//4.unshift -> add one or more elements to the beginning of the array
// let letters1 = ["a","b","c","d","e"];
// //letters1.unshift("x","y","z","w");
// //console.log(letters1);


// //5.slice()
// //Extracts a section of an array without modifying the original array
// let letters2 = ["a","b","c","d","e"];
// result = letters2.slice(1,3)//[ 'b', 'c' ]
// console.log(result);

// result2 = letters2.slice(-4)//[ 'b', 'c', 'd', 'e' ]
// console.log(result2);

// result3 = letters2.slice(3,1)//[]
// console.log(result3);

// /* Negative values 
// If start index > = end index then the result is blank
// Not swappable */



// //6.splice() -- > add or remove the elments from the array
// //array.splice(startIndex, deleteCount, item1,item2,...)
// //let letters2 = ["a","b","c","d","e"];

// letters2.splice(5,3,"x","y","z")
// console.log(letters2); //[ 'a', 'x', 'y', 'd', 'e' ]



//7. spread syntax()--> ...

// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];

// let spreadArray = [...num1,...num2];
// console.log(spreadArray);

// //8. concat()

// let mergedConcat = num1.concat(num2)
// console.log(mergedConcat);


//9. Sorting of array

let numberArray = [10,9,8,7];
numberArray.sort();
//console.log(numberArray); //[ 10, 7, 8, 9 ]

numberArray.sort((a,b) => a-b)
// console.log(numberArray);//[ 7, 8, 9, 10 ]

numberArray.sort((a,b) => b-a)
// console.log(numberArray);//[ 10, 9, 8, 7 ]

//10. filter

let even = numberArray.filter((num) => num%2===0) // 10%2=0 ->even, 9%2=1 ->0dd
console.log(even);//[ 10, 8 ]

//11. map

let mapSquared = numberArray.map((num) => num*num);
console.log(mapSquared);//[ 100, 81, 64, 49 ]







/* Class room array occurence :
----------------------------------

const nums = [2, 4, 5, 2, 1, 2];

Count the occurence of the value 2 in the array nums*/
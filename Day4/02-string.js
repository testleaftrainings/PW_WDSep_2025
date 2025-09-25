

// /* String Declaration

// 1, String literal --> points to the reference of the same memory location
// 2, Object literal*/


// //String Literal - "",'',`` Back tick

// let firstName = "Ravindran"
// let userName = "Ravindran"

// //Object Literal - "",'',`` Back tick --> Heap memory it gets stored in two different memory address

// let firstName1 = new String("Ravindran")
// let userName1 = new String("Ravindran")

// //string methods

// //Escape sequence -> \

// // let testType = 'It\'s a regression testing'
// // console.log(testType)

// // let stringType ="Hello this a \"double quote\""
// // console.log(stringType)

// //Concatenation

// let testCaseName = "Create a new Lead"
// let testCaseId=123

// let result = testCaseId.toString().concat(testCaseName)
// console.log(result);

// //with +

// let result1 = testCaseName+" - "+testCaseId+" passed the test"
// console.log(result1);

// //Template literal = `${...}`

// let testCase = 500;
// let output = `There are ${testCase} Testcases`
// console.log(output);

//length

//let courseName = "Playwright"
//length -> 1,2,3,4,5,9,10
//index -> 0,1,2,3,4,5,6,7,8,9

// console.log(`The length of the string is ${courseName.length}`);


// //charAt()-->index

// console.log(`The charAt of 2 of the string is ${courseName.charAt(2)}`);


// // indexOf() 

// console.log(`The charAt of 2 of the string is ${courseName.indexOf('a')}`);

//slice()

//let courseName = "Pl aywr ight"
//length -> 1,2,3,4,5,9,10
//index -> 0,1,2,3,4,5,6,7,8,9

//negativeIndex -> -10,-9,-8,-7,-6,-5,-4,-3,-2,-1

// let outputslice = courseName.slice(2,5) // ayw
// console.log(outputslice);

// let outputslice1 = courseName.slice(2,-4) // ig
// console.log(outputslice1);

// let outputslice2 = courseName.slice(-4) // ight
// console.log(outputslice2);

/* Note :
1. Start index included and end index is not included also optional
2. Negative index is allowed , the negative index starts from -1
3, Swapping of start and end index is not allowed */


//substring()

let courseName = "Playwright"
let outSubString1 = courseName.slice(3,5) // yw
console.log(outSubString1);

let outSubString2 = courseName.slice(5,3) //yw
console.log(outSubString2);

let outSubString3 = courseName.substring(5,-3) //Playw --> Equivalent to "5,0" // neagtive value is considered as "0"
console.log(outSubString3);


//String reveral :

let companyName="Testleaf"

//let chars = companyName.split("")
//chars = ['T','e','s','t,'l,'e','a','f']

//output = "faeltseT" using for loop


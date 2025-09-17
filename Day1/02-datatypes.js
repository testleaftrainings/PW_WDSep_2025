
/* Different types of Datatypes in JS Examples */

//Number datatype :

var phoneNumber = 6677441389
console.log(phoneNumber);


//Boolean datatype :
var rateOfInterest = true;
console.log(rateOfInterest);
console.log( typeof rateOfInterest) // number

//Bigint datatype

 var accountNumber1 =989898989183750174n
 console.log(accountNumber1)
 console.log(typeof accountNumber1) //bigint

// /* BigInt
// - (2^53 - 1) to (2^53 - 1)

// This range is:
// -9007199254740991 to 9007199254740991

// If you go beyond this range — like using:

// let num = 9007199254740992;

// JavaScript **can't guarantee accuracy**, and you'll get the `ts(80008)` warning in TypeScript because the value might be **rounded**, **inaccurate**, or **unexpected**.

//  */

//boolean datatype

var accountNumberValid = true;
console.log(typeof accountNumberValid)//boolean


//String datatype
// //Representing a string--> "",'',`` (Button above your tab in keyborad)

var username = `demoSalesmanager'12134'`;
var pwd ='$^&@*Testleaf';

console.log(username);
console.log(pwd);

// console.log(typeof username)//string

// //undefined

//  let accountNumber2; 
// console.log(accountNumber2); //undefined --> value
// console.log(typeof accountNumber2)//undefined --> datatype

// //null

// var landLineNumber=null;
// console.log(landLineNumber);//null--> value

// console.log(typeof landLineNumber)//object --> datatype//historical bug
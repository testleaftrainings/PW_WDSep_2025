

let user1 : { // user is an object
firstName : string, // declaring the datatype
lastname : string,
email : string
} = {
firstName : "Ravindran",
lastname : "R",
email : "ravi@testleaf.com"
}

//To access the different properties . you can use dot notation :

//objectName.property --> syntax for object literal

console.log(user1.firstName); //Ravindran
console.log(user1.lastname); // R


//square bracket notation :To access the different properties , you can use square bracket notation when you have a special character in your "key"



let user2 : { // user is an object
"first-Name" : string, // declaring the datatype
lastname : string,
email : string
} = {
"first-Name" : "Ravindran",
lastname : "R",
email : "ravi@testleaf.com"
}

//To access the different properties . you can use dot notation :

//objectName.property --> syntax for object literal

console.log(user2["first-Name"]); //Ravindran
console.log(user2.lastname); // R
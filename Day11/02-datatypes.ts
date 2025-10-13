/* Datatypes in TS:

1, number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
9. tuple*/

//syntax to declare in TS : variableDeclaration variableName : datatype = value

// let firstName : string = "Ravindran"
// console.log(firstName);

// //any datatype :

// let data : any = "Message received from server"
// data = 1234
// data = true

// //unknown datatype :

// let value1 : unknown = 234
// value1 = "Hello" //comes from your external DB 

// if (typeof value1 === "string") {
//     console.log(value1.toUpperCase());    
// }

//never datatype:

function infiniteLoop() : never { // For readability and maintainablity purpose we are using never datatype.

    while(true){
        console.log("Keep printing");
        
    }
}

infiniteLoop()


//tuple : Is not heterogenous nature => Array in TS

let user : [string,number,boolean] = ["Testleaf",20,true]
console.log(user[1]);//20

//Scoping in JS

//var scoping in block

// if (true) {
//     var fname= "Ravi";//declares with var
//     console.log("Inside the if block:",fname);    
// }
//    console.log("Outside the if block:",fname); //Accesible here too

//var scoping in function

function greet(){
    var message = "Hello Team this is inside the function"
    console.log("Inside the function:",message);
    if (true) {
         console.log("Inside the if block:",message);
    }
}

//console.log("Outside the function scope",message); //not accesible
greet();

//let scoping in block

// if (true) {
//     let fname= "Ravi";//declares with var
//     console.log("Inside the if block:",fname);    
// }
//   // console.log("Outside the if block:",fname); //Not Accesible here too

  //const scoping in block

// if (true) {
//     const fname= "Ravi";//declares with var
//     console.log("Inside the if block:",fname);    
// }
//    console.log("Outside the if block:",fname); //Not Accesible here too


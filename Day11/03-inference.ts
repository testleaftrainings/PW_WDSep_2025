
let num =40 // implicit inference

function funName(a:number,b:number):number { // Explicit inference 
    let c = a+b;
   // console.log(`Addition of a and b is ${c}`);
   return c   
}

//funName(10,20)
console.log(funName(10,20)); // 30 ==> number datatype

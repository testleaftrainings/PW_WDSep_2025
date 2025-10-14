

let firstName : string = "Ravindran" // hard coding the value for the variablename firstname 



let reponse : any = "123" // data that comes from your derver / datafile

let myResponse = <string> reponse

console.log(myResponse.length); //Output : 3 when you do your type assertion

/* let reponse : any = "success" // data that comes from your derver / datafile

let myResponse = reponse

console.log(myResponse.toUpperCase); //Output : undefined when you do not use your type assertion

 */

//Using as keyword

let sCode :any = "Sucess"

let statusLength = sCode as string 

console.log(statusLength.length);

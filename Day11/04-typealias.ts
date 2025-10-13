//Type Alias -- Union and Intersection

let username1 : string ="ravi@testleaf" // string
username1=809809 //throws error cause of number datatype

let username2 : string | number // here using union we can have either string ot number datatype while assigning a value to the variable name
username2="ravi@testleaf" // string
username2=90908 // number

type customDattype = number | string

/* let accountNumber : number
accountNumber=980989089
accountNumber="" */

let accountNumber : customDattype // type alias or alternate dattype name that can hold or declared both your string as well as number
accountNumber=980989089
accountNumber=""


type supportedBrowser = "Chrome" | "Firefox" | "safari" 

function invokeBrowser(browserName:supportedBrowser){

    if (browserName==="Chrome") {
        console.log("Launch Chrome Browser");        
    }


}
invokeBrowser("Chrome")





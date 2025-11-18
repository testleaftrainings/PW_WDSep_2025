//Abstract class

import { reserveBank } from "./interface";

abstract class ElementWrapper {

 //0 to 100% implemnetation
 //cannot create an object 
 
 typeAndTab(firstName : string){ // implemented methods
console.log(`Type in the data and press tab ${firstName} `);
 }
 
 abstract takeScreenshot():void // unimplemented methods
}

class Login extends ElementWrapper implements reserveBank{

    takeScreenshot(): void {
        console.log("screenshot this method comes from abstract class");        
    }

    interestRate(interestRate: number): void {
        console.log(`Interest rate is ${interestRate} comes from interface.ts file`);
        
    }
}

const login = new Login()
login.takeScreenshot()
login.typeAndTab("Ravi")
login.interestRate(6.5)


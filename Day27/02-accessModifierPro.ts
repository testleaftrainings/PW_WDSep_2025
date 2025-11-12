import { EmployeeSignUp  } from "./01-accessModifiers";


class HR extends EmployeeSignUp{

    empUpdate(){
        this.ephno=733333 //can rewrite the ephno which is declared as protected access modifier
        console.log(this.ephno);   
    }
    
    constructor(){
      super()
        this.eName="Ravi" // This value comes from constructor of super class EmployeeSignUp
        console.log("This is the constructor of HR Class /Derived Class");
        
    } 

}

let emp = new HR()
emp.empUpdate()


/* Note :
Extends keyword will tell the compiler / control that HR is the child/ derived class of EmployeeSignUp which is the Super class/ Parent class   */
/* 
AccessModifiers in TypeScript :
Public
Private
Protected */



export class EmployeeSignUp{

    public eName : string // if you dont give any modifiers it is taken as public
    public eid : string
    protected ephno : number
    private eSalary : number

//First block of code to be called to assign the values to the variables

    constructor(){ // this constructor will be invoked first 
        this.eName="Ravi"
        this.eid="emp1234"
        this.ephno=898989898
        this.eSalary=23456
        console.log("This is a constructor of BaseClass");        
    }


    printDetails(){
        console.log(`The emp details ${this.eName} : ${this.eid} : ${this.ephno}: ${this.eSalary}`);
        
    }

    public get readData(){
        return this.eSalary // Here we exposing the private variable using "get"
    }

    public set writeData(Tnewsalar:number){
        this.eSalary=Tnewsalar //// Here we modifying the private variable using "set" so that it overrides the existing salary value
    }

}

const emp = new EmployeeSignUp()


// const emp = new EmployeeSignUp("Ravi","emp1234") // Parameterized constructor
// const emp1 = new EmployeeSignUp("Hari","emp5678")
// const emp2 = new EmployeeSignUp("Hari","emp5678")
emp.printDetails()
// emp1.printDetails()

let oldSal = emp.readData
console.log(oldSal);

emp.writeData=67899
console.log(emp.readData); // new salary





class Employee {

    empName: string=""
    empId: string=""

    printDetails(Tname: string, Tid: string) { // Globally variable is available
        this.empName = Tname //Ravi, Hari
        this.empId = Tid // emp1234,emp5678
        console.log(`Employee details ${this.empName} : ${this.empId}`);
        
    }

    payroll() {
        console.log("emp payroll process");
    }

    empDetails(empLocalid: string) { // Local variable available only for this block
        console.log(`The is of the emplyee ${empLocalid}`);
    }

    constructor() {
        console.log("This is a default constructor");

    }
}

const empObj = new Employee() // Default constructor

empObj.printDetails("Ravi", "emp1234")
empObj.printDetails("Hari", "emp5678")
empObj.empDetails("emp789")

empObj.payroll()



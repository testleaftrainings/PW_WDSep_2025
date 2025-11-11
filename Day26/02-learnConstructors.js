var Employee = /** @class */ (function () {
    function Employee() {
        console.log("This is a default constructor");
    }
    Employee.prototype.printDetails = function (Tname, Tid) {
        this.empName = Tname; //Ravi, Hari
        this.empId = Tid; // emp1234,emp5678
        console.log("Employee details ".concat(this.empName, " : ").concat(this.empId));
    };
    Employee.prototype.payroll = function () {
        console.log("emp payroll process");
    };
    Employee.prototype.empDetails = function (empLocalid) {
        console.log("The is of the emplyee ".concat(empLocalid));
    };
    return Employee;
}());
var empObj = new Employee();
empObj.printDetails("Ravi", "emp1234");
empObj.printDetails("Hari", "emp5678");
empObj.empDetails("emp789");
empObj.payroll();

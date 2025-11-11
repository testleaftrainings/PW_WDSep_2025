/*
AccessModifiers in TypeScript :
Public
Private
Protected */
var EmplyeeSignUp = /** @class */ (function () {
    //First block of code to be called to assign the values to the variables
    function EmplyeeSignUp(Tname, Tid) {
        this.eName = Tname;
        this.eid = Tid;
        this.ephno = 898989898;
        this.eSalary = 23456;
        console.log("This is a constructor of BaseClass");
    }
    EmplyeeSignUp.prototype.printDetails = function () {
        console.log("The emp details ".concat(this.eName, " : ").concat(this.eid, " : ").concat(this.ephno, ": ").concat(this.eSalary));
    };
    Object.defineProperty(EmplyeeSignUp.prototype, "readData", {
        get: function () {
            return this.eSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmplyeeSignUp.prototype, "writeData", {
        set: function (Tnewsalar) {
            this.eSalary = Tnewsalar;
        },
        enumerable: false,
        configurable: true
    });
    return EmplyeeSignUp;
}());
var emp = new EmplyeeSignUp("Ravi", "emp1234"); // Parameterized constructor
var emp1 = new EmplyeeSignUp("Hari", "emp5678");
var emp2 = new EmplyeeSignUp("Hari", "emp5678");
/* emp.printDetails()
emp1.printDetails() */
var oldSal = emp.readData;
console.log(oldSal);
emp.writeData = 67899;
console.log(emp.readData); // new salary

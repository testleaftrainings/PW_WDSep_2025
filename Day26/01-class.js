//Class = Blueprint of the car
var CarToyato = /** @class */ (function () {
    function CarToyato() {
        //Properties(features)
        this.color = "White";
        this.engineType = "Diesel";
    }
    //Methods ( actions)
    CarToyato.prototype.startEngine = function () {
        console.log("The car has started with engine type ".concat(this.engineType, " that is ").concat(this.color, " in color"));
    };
    CarToyato.prototype.drive = function () {
        console.log("The car is driving");
    };
    CarToyato.prototype.stopEngine = function () {
        console.log("The car has stopped");
    };
    return CarToyato;
}());
var myCarObject = new CarToyato(); // Creation of the object 
myCarObject.startEngine();
myCarObject.drive();
myCarObject.stopEngine();
myCarObject.color;
myCarObject.engineType;

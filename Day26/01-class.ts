//Class = Blueprint of the car

class CarToyato{    
    //Properties(features)
    color="White"
    engineType="Diesel"

    //Methods ( actions)
    startEngine(){
        console.log(`The car has started with engine type ${this.engineType} that is ${this.color} in color`);   
   
    }

    drive(){
        console.log(`The car is driving`);     
    }
    
    stopEngine(){
        console.log(`The car has stopped`);      

    }

}

const myCarObject = new CarToyato() // Creation of the object 

myCarObject.startEngine()
myCarObject.drive()
myCarObject.stopEngine()

myCarObject.color;
myCarObject.engineType;






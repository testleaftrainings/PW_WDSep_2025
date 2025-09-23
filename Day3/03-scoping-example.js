var genderType = "female" // global declaration
//const color="black"
function printGender(){
    let color = "brown"//function scope
    if (genderType.startsWith("female")) {
        var age = 30;
        let color ="pink";
        
        console.log("She/her favourite colour is "+color);  // color => pink cause block scope        
    } else {
        var age = 35;
        console.log("He/his favourite color is "+color); // color => brown function scope
    }
console.log(age);
}

printGender()

console.log(genderType); // global

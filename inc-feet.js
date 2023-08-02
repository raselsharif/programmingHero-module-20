const inches = 100;

const feet = inches/12;
const feets = parseInt(feet);
console.log(feets);

// using function

function inchToFeet(inches){
 const feet = inches/12;
 return feet;
}

const myInches = 168;
const myFeet = inchToFeet(myInches)
console.log(myFeet);


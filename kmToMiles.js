
function kmToMiles (kilometers){
    const miles = kilometers*0.621371;
    return miles;
}

const miles = kmToMiles(100).toFixed(4);

console.log(miles);
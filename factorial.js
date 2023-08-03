// factorial normal lopp
function factorial(number) {

    let sum = 1;
    for (let i = 1; i <= number; i++) {
        console.log(i);
        sum *= i;
    }
    return sum;
}

const result = factorial(7);
console.log(result);

// factorial reverse loop
function factorialReverse(number) {

    let sum = 1;
    for (let i = number; i >= 1; i--) {
        console.log(i);
        sum *= i;
    }
    return sum;
}

const resultReverse = factorialReverse(7);
console.log(result);
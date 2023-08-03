
function sumNumbers(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

const sum = sumNumbers(7);

console.log(sum);

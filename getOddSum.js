function getSumArry(numbers) {

    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        // console.log(sum);
    }
    return sum;
}



function getOddSum(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}


const myNumbers = [20, 10, 30, 11, 13, 15, 45, 95, 62, 54]
const oddNumbers = getOddSum(myNumbers);
const arraySum = getSumArry(oddNumbers);
console.log(arraySum);
// console.log(oddNumbers);
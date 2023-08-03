function getSumArray(numbers) {
    let arrSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const total = numbers[i]
        arrSum += total;
        console.log(arrSum);
    }
    return arrSum;

}

const myArray = [10, 20, 20]

getSumArray(myArray);

const hisArray = [10, 20, 20, 50, 100, 400]
getSumArray(hisArray);
function isLeapYear (year){
    const remainder = year%4;
    if(remainder === 0){
        return true;
    }
    return false;
}
const myYear = isLeapYear(2001);

console.log(myYear);
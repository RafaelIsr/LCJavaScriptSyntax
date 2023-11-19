function numberOfDigits(number){
    let count = 0;
    let last;
    while (number !== 0) {
        last = number % 10;
        number = (number - last) / 10;
        count++;
        }
    return count;
}
console.log(numberOfDigits(305255));

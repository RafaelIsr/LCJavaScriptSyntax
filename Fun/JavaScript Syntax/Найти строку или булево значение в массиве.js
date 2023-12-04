function findStringOrBoolean (arr) {
    for (i = arr.length - 1; i >= 0; i--)
        if (typeof arr[i] === 'string' || typeof arr[i] === 'boolean') {
            return i
        }
    return 'No string or boolean found';
}

console.log(findStringOrBoolean([1, false, 2, '4', 5, 6, 7, 8, '9', 10])) // 8


// Сумма нечетных чисел массива. Инструкция continue
function oddSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue } sum += arr[i]
    } return sum
}

console.log(oddSum([1, 2, 3, 4, 5])) // 9
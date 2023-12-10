// Прервать заполненеие массива на цифре 20
function stopAtTwenty(arr, n1, n2) {
    for (i = n1; i <= n2; i++){
        arr.push(i);
        if (i === 20) break;
    }
    return arr
}

console.log(stopAtTwenty([], 1, 30))

// Сумма нечетных чисел массива. Инструкция continue
function oddSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue } sum += arr[i]
    } return sum
}

console.log(oddSum([1, 2, 3, 4, 5])) // 9

// Среднее арифметическое четных чисел массива. Метод continue
function evenAvr (arr) {
    let count = 0;
    let acc = 0;
    for (i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            continue
        }
        count += arr[i], acc++}
    let result = count / acc
    if(count !== 0) return result
    return 0
}

console.log(evenAvr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 6

// Очистить массив от boolean
function cleanFromBoolean (arr) {
    let arrNew = [];
    for (i=0; i<arr.length; i++) {
        if (typeof arr[i] === 'boolean'){
            continue
        } arrNew.push(arr[i])
    } return arrNew
}

console.log(cleanFromBoolean(["a", "b", true, "c", "d"])) // ["a", "b", "c", "d"]

// Удвоить элементы массива, кроме единицы
function twiceExceptOne(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            newArr.push(arr[i]);
            continue;
        }
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(twiceExceptOne([0, 1, 2, 3, 4, 5])) // [0, 1, 4, 6, 8, 10]
function twiceExceptOne2(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) continue;
        arr[i] *= 2;
    }
    return arr;
}

console.log(twiceExceptOne2([0, 1, 2, 3, 4, 5])) // [0, 1, 4, 6, 8, 10]

// Числа больше 10 разделить на 10
function divideOn10 (arr){
    for (i=0; i<arr.length; i++){
        if (arr[i] < 10){continue}
        arr[i] = arr[i] / 10
    } return arr
}
console.log(divideOn10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1.1]



// Прервать заполненеие массива на цифре 20
function stopAtTwenty(arr, n1, n2) {
    for (i = n1; i <= n2; i++){
        arr.push(i);
        if (i === 20) break;
    }
    return arr
}

console.log(stopAtTwenty([], 1, 30))


function fillArray(n, m) {
    const array= [];
    for (i = 0; i <= n; i++) {
        if (i % 3 === 0) {
            array.push(Math.pow(i, m));
        }
    }
    return array;
}
console.log(fillArray(10, 1))
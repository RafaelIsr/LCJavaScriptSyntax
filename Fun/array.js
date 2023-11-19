function deepCopy(arr){
    const str = JSON.stringify(arr);
    const parse = JSON.parse(str);
    return arr
}
function list(array, key) {
    return array.includes(key);
}
module.exports = {deepCopy, list};

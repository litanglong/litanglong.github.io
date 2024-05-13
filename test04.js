var sum = 0;
var arr = [0, 1, 0, 0, 0, 1]
for (let i = 0; i < arr.length; i++) {
    sum = (sum * 2) + arr[i];
}
console.log(sum)


var arr1 = [], a = 17;
for (let i = 0; i < 6; i++) {
    arr1.unshift(a % 2)
    a = (a - (a % 2)) >> 1
}
console.log(arr1)

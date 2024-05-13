// 假设 d 的值已经计算得到：
var d = 11624584;

// 恢复 c 的值：
var c = d & 0xFF; // 取最后8位即为c

// 恢复 b 的值：
var b = (d >> 8) & 0xFF; // 右移8位然后取最后8位即为b

// 恢复 a 的值：
var a = (d >> 16) & 0xFF; // 右移16位然后取最后16位即为a，这里需要考虑JavaScript中Number类型的精度问题，实际可能只需要&0xFF_FF即可。
//
// console.log(a)
// console.log(b)
// console.log(c)

function t (e, t) {
    var n = 0
    for (var r = 23; 0 <= r; r--) {
        if (1 === (t >> r & 1)) {
            n = (n << 1) + (e >> r & 1)
            console.log("r " + r)
            console.log("n " + n)
            console.log("e >> r " + (e >> r & 1))
        }
    }
    return n;
}

// 7274496   11011110000000000000000
// 11624584 10110001 01100000 10001000

console.log(t(d, 235));

// 11624584 >> 22 2              10 0
// 11624584 >> 21 5             101 1
// 11624584 >> 19 22          10110 0
// 11624584 >> 18 44         101100 0
// 11624584 >> 17 88        1011000 0
// 11624584 >> 16 177      10110001 1
console.log("---------------")
console.log(11624584 >> 22)
console.log(11624584 >> 21)
console.log(11624584 >> 19)
console.log(11624584 >> 18)
console.log(11624584 >> 17)
console.log(11624584 >> 16)


// function t (e, t) {
//     var n = 0
//     for (var r = 23; 0 <= r; r--) {
//         if (1 === (t >> r & 1)) {
//             n = (n << 1) + (e >> r & 1)
//         }
//     }
//     return n;
// }

console.log(t(11624584, 7274496));


var sum = 0;
var arr = [0, 1, 0, 0, 0, 1]
for (let i = 0; i < arr.length; i++) {
    sum = (sum * 2) + arr[i];
}
console.log(sum)

var arr = []
var a = 17;
for (let i = 0; i < 6; i++) {
    if (a % 2 !== 0) {
        a = a - 1;
        arr.unshift(1)
    } else {
        a = a / 2;
        arr.unshift(0)
    }
}
console.log(arr)

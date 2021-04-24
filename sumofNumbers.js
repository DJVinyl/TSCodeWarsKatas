"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSum = void 0;
function getSum(a, b) {
    // Good luck!
    if (a === b) {
        return a;
    }
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    console.log('a, b', a, b);
    var temp = [];
    for (let i = a; i <= b; i++) {
        temp.push(i);
    }
    console.log(temp);
    return temp.reduce((acc, val) => acc + val);
}
exports.getSum = getSum;
console.log(getSum(-5, -1));

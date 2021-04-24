"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = void 0;
function divisors(n) {
    let temp = [];
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            temp.push(i);
        }
    }
    return temp.length;
}
exports.divisors = divisors;
console.log(divisors(54));

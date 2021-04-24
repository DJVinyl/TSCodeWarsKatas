"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static squareDigits(num) {
        let str = num.toString();
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let temp = Number(str[i]) * Number(str[i]);
            result += temp.toString();
        }
        return Number(result);
    }
}
exports.Kata = Kata;
console.log(Kata.squareDigits(9119));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
function oddOrEven(array) {
    if (array.length === 0) {
        return "even";
    }
    const sum = array.reduce((acc, val) => acc + val);
    return sum % 2 === 0 ? "even" : "odd";
}
exports.oddOrEven = oddOrEven;

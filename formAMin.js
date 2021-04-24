"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minValue = void 0;
const minValue = (values) => {
    let unique = values.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
    let str = unique.sort((a, b) => a - b).join('');
    return Number(str);
};
exports.minValue = minValue;
console.log(exports.minValue([1, 3, 1]));

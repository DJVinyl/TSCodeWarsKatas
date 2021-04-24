"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.minValue = void 0;
var minValue = function (values) {
    var unique = __spreadArray([], new Set(values));
    unique.sort(function (a, b) { return a - b; });
    unique.join('');
    console.log(unique);
    return 1;
};
exports.minValue = minValue;
console.log(exports.minValue([1, 3, 1]));

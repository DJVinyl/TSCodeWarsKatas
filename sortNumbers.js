"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution2 = exports.solution = void 0;
function solution(nums) {
    if (nums.length === 0) {
        return [];
    }
    else {
        return nums.sort((a, b) => {
            return a - b;
        });
    }
}
exports.solution = solution;
// or using ternary operator
function solution2(nums) {
    return nums.length === 0 ? [] : nums.sort((a, b) => a - b);
}
exports.solution2 = solution2;
console.log(solution([1, 2, 10, 50, 5]));
console.log(solution2([1, 2, 10, 50, 5]));

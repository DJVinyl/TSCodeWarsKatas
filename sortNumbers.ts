export function solution(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  } else {
    return nums.sort((a, b) => {
      return a - b;
    });
  }
}


// or using ternary operator
export function solution2(nums: number[]): number[] {
  return nums.length === 0 ? [] : nums.sort((a,b) => a-b); 
}



console.log(solution([1, 2, 10, 50, 5]));

console.log(solution2([1, 2, 10, 50, 5]));
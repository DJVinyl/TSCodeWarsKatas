export function oddOrEven(array: number[]) {
  if (array.length === 0) {
    return "even";
  }
  const sum = array.reduce((acc, val) => acc + val);
  return sum % 2 === 0 ? "even" : "odd";
}
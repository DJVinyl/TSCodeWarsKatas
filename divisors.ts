export function divisors(n: number): number {
  let temp = [];
  for (let i = n; i > 0; i--) {
    if (n % i === 0) {
      temp.push(i);
    }
  }
  return temp.length;
}

console.log(divisors(54));

export function getSum(a: number, b: number): number {
  // Good luck!
  if (a === b) {
    return a;
  }

  if (a > b){
    let temp = a; 
    a = b;
    b = temp;
  }
  console.log('a, b', a, b)

  var temp = [];  
  for (let i = a; i <= b; i++) {
    temp.push(i);
  }  
  console.log(temp);

  return temp.reduce((acc,val) => acc + val); 
}

console.log(getSum(-5, -1))
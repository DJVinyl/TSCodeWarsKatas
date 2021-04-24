export class Kata {
  static highAndLow(numbers: string) : string {
    // throw new NotImplementedException() ?
    // No, wait, this is TypeScript.
    const arrNumbers = numbers.split(' ').map( x => +x);
    arrNumbers.sort((a,b) => a - b);
    return String(arrNumbers[arrNumbers.length-1]) + ' ' + String(arrNumbers[0]);
  }
}


console.log(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
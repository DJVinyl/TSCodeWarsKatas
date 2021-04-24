export class Kata {
  static squareDigits(num: number):number {
    let str = num.toString();
    let result = '';
    for (let i = 0; i < str.length; i++){
      let temp = Number(str[i]) * Number(str[i]);
      result += temp.toString();
    }
    return Number(result);
  }
}

console.log(Kata.squareDigits(9119));
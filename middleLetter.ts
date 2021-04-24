export class Challenge {
  static getMiddle(s:string) {
    // return the middle charater(s)
    if (s.length === 0) {
      return "";
    } else {
      return s.length % 2 === 0
        ? s[s.length / 2 - 1] + s[s.length / 2]
        : s[Math.floor(s.length / 2)];
    }
  }
}
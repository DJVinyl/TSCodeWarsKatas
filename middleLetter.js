"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
    static getMiddle(s) {
        // return the middle charater(s)
        if (s.length === 0) {
            return "";
        }
        else {
            return s.length % 2 === 0
                ? s[s.length / 2 - 1] + s[s.length / 2]
                : s[Math.floor(s.length / 2)];
        }
    }
}
exports.Challenge = Challenge;

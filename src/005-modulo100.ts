import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = +input[0];
//  [ '3', '1', '4', '1', '5' ]
const nums = input.slice(1, N + 1).map((n) => n.split(" "))[0];
let ans = 0;
nums.forEach((n) => (ans += +n));
const res = ans % 100;
console.log(res);

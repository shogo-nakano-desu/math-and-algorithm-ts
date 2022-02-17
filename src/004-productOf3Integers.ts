import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// ["a", "b"]
const nums = input[0].split(" ");
let ans = 1;
nums.forEach((n) => (ans *= +n));

console.log(ans);

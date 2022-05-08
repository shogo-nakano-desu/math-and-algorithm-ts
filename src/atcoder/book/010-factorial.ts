import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = +input[0];

let ans = 1;
for (let i = N; i > 0; i--) {
  ans *= i;
}
console.log(ans);

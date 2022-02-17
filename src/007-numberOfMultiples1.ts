import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// ["a", "b"]
const nums = input[0].split(" ");
const N = +nums[0];
const x = +nums[1];
const y = +nums[2];

let ans = 0;
for (let i = 1; i <= N; i++) {
  if (i % x === 0 || i % y === 0) {
    ans += 1;
  }
}

console.log(ans);

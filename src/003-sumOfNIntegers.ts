import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = parseInt(input[0]);
const nums = input.slice(1, N + 1).map((n) => n.split(" "))[0];
let ans = 0;
nums.forEach((n: string) => (ans += parseInt(n)));
console.log(ans);

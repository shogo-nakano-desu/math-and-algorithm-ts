import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// a(number)
const n = +input[0];
// ["a", "b"]
const nums = input[0].split(" ");
const N = +input[0];
// [ [ '3', '1', '4', '1', '5' ], [ '' ] ]
const nums_multi = input.slice(1, N + 1).map((n) => n.split(" "));

const a = [];
for (let i = 0; i < n; i++) {
  a.push(input[i + 1].split(" ").map((x: string): number => +x));
}

console.log(input);

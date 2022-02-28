import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// a(number)
const n = +input[0];
// ["a", "b"]
const nums = input[0].split(" ");

/**
 * N
 * A A A A A
 */
const N = +input[0];
//  [ '3', '1', '4', '1', '5' ]
const bigints = input[1].split(" ").map((a: string) => BigInt(a));
const numbers = input.slice(1, N + 1).map((n) => n.split(" "))[0];

/**
 *
 */

const a = [];
for (let i = 0; i < n; i++) {
  a.push(input[i + 1].split(" ").map((x: string): number => +x));
}

console.log(input);

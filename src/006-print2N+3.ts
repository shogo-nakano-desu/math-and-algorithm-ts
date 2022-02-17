import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// a(number)
const n = +input[0];
console.log(2 * n + 3);

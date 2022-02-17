import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const n = +input[0];

const apple = 5;

console.log(n + apple);

import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const nums = input[0].split(" ");
const a = parseInt(nums[0]);
const b = parseInt(nums[1]);
const c = parseInt(nums[2]);

console.log(a + b + c);

import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// ["a", "b"]
const nums = input[0].split(" ");
const A = +nums[0];
const B = +nums[1];

let larger = A >= B ? A : B;
let smaller = A >= B ? B : A;

// a >= b
const division = (a: number, b: number) => {
  const rem = a % b;
  if (rem !== 0) {
    division(b, rem);
  } else {
    console.log(b);
  }
};
division(larger, smaller);

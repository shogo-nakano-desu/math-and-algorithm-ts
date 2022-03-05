import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const N = +input[0];
const numbers = input.slice(1, N + 1).map((n) => n.split(" "))[0];

//100,200,300,400の数をそれぞれ数える。
//100&400, 200&300になる組がいくつあるのか数える
let one = 0;
let two = 0;
let three = 0;
let four = 0;

numbers.forEach((n) => {
  if (+n === 100) {
    one += 1;
  } else if (+n === 200) {
    two += 1;
  } else if (+n === 300) {
    three += 1;
  } else {
    four += 1;
  }
});

let ans = one * four + two * three;

console.log(ans);

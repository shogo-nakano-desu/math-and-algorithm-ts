import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// ["a", "b"]
const nums_first = input[0].split(" ");
const N = +nums_first[0];
const S = +nums_first[1];
/**
 * N
 * A A A A A
 */
// const N = +input[0];
//  [ '3', '1', '4', '1', '5' ]
const A = input.slice(1, N + 1).map((n) => n.split(" "))[0];

const main = (N: number, S: number) => {
  for (let i = 0; i < 1 << N; i++) {
    let sum = 0;
    for (let j = 0; j <= N; j++) {
      if (i & (1 << j)) {
        sum += +A[j];
      }
    }
    if (sum === S) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
  return;
};
main(N, S);

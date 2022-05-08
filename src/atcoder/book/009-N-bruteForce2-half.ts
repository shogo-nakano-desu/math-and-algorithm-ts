// この実装だとNが増えたときにタイムアウトして半分しか点数がもらえない
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
const A = input.slice(1, N + 1).map((n) => n.split(" "))[0];

// example
// N=3
// S=11
// A=[2,5,9]
const main = (N: number, S: number) => {
  // 1<<Nは２のN乗を表す
  //i: 0-7で8パターン
  for (let i = 0; i < 1 << N; i++) {
    let sum = 0;
    //j: 1-3で3パターン
    for (let j = 1; j <= N; j++) {
      // &はビット論理積
      // iの二進法表記のうち下からj番目が1の時
      // i=[000,001,010,011,100,101,110,111]
      // 1<<(j-1)=[001,010,100]
      if ((i & (1 << (j - 1))) != 0) {
        sum += +A[j - 1];
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

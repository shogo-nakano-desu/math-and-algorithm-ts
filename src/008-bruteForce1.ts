import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// ["a", "b"]
const nums = input[0].split(" ");
const N = +nums[0];
const S = +nums[1];

// 組み合わせはN+(N-1)+(N-2)+...1
// つまり、1からNまでの和の数だけある。
// N=1000の時、組み合わせは500,500なので全探索可能

let ans = 0;
for (let i = 1; i <= N; i++) {
  console.log(`i${i}`);
  for (let k = 1; k <= N; k++) {
    if (k < i) {
      continue;
    }

    const sum = i + k;
    console.log(`sum${sum}`);
    if (sum <= S) {
      ans += 1;
    }
  }
}

console.log(ans);

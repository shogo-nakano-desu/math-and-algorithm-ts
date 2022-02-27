import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = +input[0];

const ans = [];
const isPrime = (num: number) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
for (let i = 2; i <= N; i++) {
  if (isPrime(i) === true) {
    ans.push(i);
  }
}
console.log(ans.join(" "));

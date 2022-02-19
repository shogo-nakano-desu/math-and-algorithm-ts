import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
// a(number)
const N = +input[0];

const factorization = (N: number) => {
  let counter = 0;
  const ans: any = [];
  let temp = N;

  for (let i = 2; i <= Math.sqrt(temp); i++) {
    while (temp % i === 0) {
      counter++;
      ans.push(i);
      temp = temp / i;
    }
  }
  if (temp !== 1) {
    ans.push(temp);
  }
  return ans;
};
const res = factorization(N);

console.log(res.join(" "));

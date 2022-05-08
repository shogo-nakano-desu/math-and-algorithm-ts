import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = +input[0];

const max = Math.sqrt(N);
const res = [];

for (let i = 1; i <= max; i++) {
  if (N % i === 0) {
    const other = N / i;
    res.push(i);
    res.push(other);
  }
}
res.sort();
res.forEach((r) => console.log(r));

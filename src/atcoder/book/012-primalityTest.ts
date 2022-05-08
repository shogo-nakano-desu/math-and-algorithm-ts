import * as fs from "fs";
import { isPrimitive } from "util";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");
const N = +input[0];

const isPrime = (num: number) => {
  if (num >= 4) {
    const max = Math.sqrt(num);
    for (let i = 2; i <= max; i++) {
      if (num % i === 0) {
        console.log("No");
        return;
      }
    }
    console.log("Yes");
    return;
  }
  console.log("Yes");
  return;
};
isPrime(N);

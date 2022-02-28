import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const N = +input[0];
//  [ '3', '1', '4', '1', '5' ]
const A = input.slice(1, N + 1).map((n) => n.split(" "))[0];
const gcd = (arg: string[]) => {
  const f: any = (a: number, b: number) => (b ? f(b, a % b) : a);
  let ans = +arg[0];
  for (let i = 1; i < arg.length; i++) {
    ans = f(ans, +arg[i]);
  }
  return ans;
};
console.log(gcd(A));

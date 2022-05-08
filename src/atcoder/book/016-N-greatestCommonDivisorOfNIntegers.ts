import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const N = +input[0];
//  [ '3', '1', '4', '1', '5' ]
const A = input[1].split(" ").map((a: string) => BigInt(a));
const gcd = (arg: bigint[]) => {
  const f: any = (a: bigint, b: bigint) => (b ? f(b, a % b) : a);
  let ans = arg[0];
  for (let i = 0; i < arg.length - 1; i++) {
    ans = f(ans, arg[i + 1]);
  }
  return String(ans);
};
console.log(gcd(A));

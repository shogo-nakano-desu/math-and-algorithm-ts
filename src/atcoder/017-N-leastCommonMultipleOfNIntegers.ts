// 最小公倍数の条件
// 一番でかい数字よりも大きい
// それぞれの数字をかけた数よりは小さい
// 最小公倍数(LCM) = a*b/GCD

import * as fs from "fs";

const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n");

const N = Number(input[0]);
//  [ '3', '1', '4', '1', '5' ]
// const A = input.slice(1, N + BigInt(1)).map((n) => n.split(" "))[0];
const A = input[1].split(" ").map((a: string) => BigInt(a));
//2つの値での最小公倍数＆最大公約数
const lcm2 = (a: bigint, b: bigint) => {
  const d = gcd2(a, b);
  return (a * b) / d;
};
const gcd2 = (a: bigint, b: bigint): any => {
  return b ? gcd2(b, a % b) : a;
};

const lcm = (arg: bigint[]) => {
  let l = arg[0];
  for (let i = 0; i < arg.length - 1; i++) {
    l = lcm2(l, arg[i + 1]);
  }
  return String(l);
};
console.log(lcm(A));

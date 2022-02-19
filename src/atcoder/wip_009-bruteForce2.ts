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
const nums = input.slice(1, N + 1).map((n) => n.split(" "))[0];

// １枚の時、２枚の時、、、N枚の時で全探索していく
const searchPair = (nums: string[]) => {
  for (let i = 0; i < nums.length; i++) {
    let trial = +nums[i];
    for (let k = 1; k <= nums.length; k++) {
      if (trial === S) {
        console.log("Yes");
        return;
      } else {
        trial += +nums[i + k];
      }
    }
  }
};

const fib = (n: number) => {
  const a = [1, 1];
  // a[2]以降
  for (let i = 2; i <= n + 1; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }
  return a[n];
};

console.log(fib(8));

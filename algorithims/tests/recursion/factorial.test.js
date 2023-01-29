/*
 a factorial is when you take a given number (n) and multiply it by each preceding number until you get to one
 n * (n-1) * (n-2) ... * 3 * 2 * 1
 factorial(1) = 1
 factorial(2) = 2
 factorial(3) = 6 
*/

function factorial(n) {
  if (n < 2) return 1;
  return n * factorial(n - 1);
}

test("factorials", () => {
  expect(factorial(1)).toEqual(1);
  expect(factorial(2)).toEqual(2);
  expect(factorial(3)).toEqual(6);
  expect(factorial(10)).toEqual(3628800);
});

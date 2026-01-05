const add = require('./script');  

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns the number", () => {
  expect(add("5")).toBe(5);
});

test("two numbers return their sum", () => {
  expect(add("3,6")).toBe(9);
});

test("multiple numbers return their sum", () => {
  expect(add("1,2,3,4")).toBe(10);  // 1+2+3+4 = 10
});

test("numbers greater than 1000 are ignored", () => {
  expect(add("2,1001")).toBe(2);  // 1001 is ignored
  expect(add("1000,1001")).toBe(1000);  // 1001 is ignored
});

test("negative numbers throw an error", () => {
  expect(() => add("1,4,-1")).toThrow("negatives not allowed: -1");
  expect(() => add("-1,-2,-3")).toThrow("negatives not allowed: -1, -2, -3");
});

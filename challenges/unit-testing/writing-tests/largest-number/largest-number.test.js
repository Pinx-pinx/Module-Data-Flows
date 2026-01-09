let getLargestNumber = require("./largest-number");

test("returns largest number in array and checks original array is unchanged", function () {
  // Arrange
  const numbers = [3, 21, 88, 4, 36];
  const expected = 88;
  const originalArray = [...numbers];  
  // Act
  const result = getLargestNumber(numbers);

  // Assert
  expect(result).toEqual(expected);  
  expect(numbers).toEqual(originalArray);  
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

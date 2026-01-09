let removeVowelsFromWords = require("./remove-vowels-in-array");
let removeVowels = require("./remove-vowels");

describe("removeVowels function", () => {
  test("removes vowels from a single word", () => {
    // Arrange
    const input = "samuel";
    const expectedOutput = "sml";

    // Act
    const result = removeVowels(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  test("returns an empty string when input contains only vowels", () => {
    // Arrange
    const input = "aeiou";
    const expectedOutput = "";

    // Act
    const result = removeVowels(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  test("returns the same string if no vowels are present", () => {
    // Arrange
    const input = "rhythm";
    const expectedOutput = "rhythm";

    // Act
    const result = removeVowels(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
});

describe("removeVowelsFromWords function", () => {
  test("removes vowels from each word in an array", () => {
    // Arrange
    const input = ["Irina", "Etza", "Daniel"];
    const expectedOutput = ["rn", "tz", "Dnl"];

    // Act
    const result = removeVowelsFromWords(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  test("returns empty strings for words with only vowels", () => {
    // Arrange
    const input = ["aeiou", "IOU", "OIE"];
    const expectedOutput = ["", "", ""];

    // Act
    const result = removeVowelsFromWords(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  test("returns the same array if no vowels are present in the words", () => {
    // Arrange
    const input = ["rhythm", "myth"];
    const expectedOutput = ["rhythm", "myth"];

    // Act
    const result = removeVowelsFromWords(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });
});



// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]

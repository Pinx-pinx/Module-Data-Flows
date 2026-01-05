function convertToOldRoman(n) {
  let result = "";


  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 500, symbol: "D" },
    { value: 100, symbol: "C" },
    { value: 50, symbol: "L" },
    { value: 10, symbol: "X" },
    { value: 5, symbol: "V" },
    { value: 1, symbol: "I" }
  ];

 
  for (let i = 0; i < romanNumerals.length; i++) {
    while (n >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      n -= romanNumerals[i].value;
    }
  }

  return result;
}

module.exports = convertToOldRoman;

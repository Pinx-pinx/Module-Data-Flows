function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const negatives = [];
  const sum = numbers.split(',').reduce((sum, num) => {
    const number = parseInt(num);
    if (number < 0) {
      negatives.push(number);
    } else if (number <= 1000) {
      sum += number;
    }
    return sum;
  }, 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  return sum;
}
module.exports = add;

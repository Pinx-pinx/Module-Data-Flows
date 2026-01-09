// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {

  const numericValues = numbers.filter(item => typeof item === 'number');
 
  if (numericValues.length === 0) return 0;

  
  const sum = numericValues.reduce((total, num) => total + num, 0);

  return sum / numericValues.length;
}



module.exports = average;

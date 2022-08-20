module.exports = function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let division = ((min_interval + max_interval) / 2);
  let result = number / division;

  if (division === result) return division;
  if (division > result) {
    max_interval = division;
    return sqrt_recursive(number, min_interval, max_interval)
  }
  if (division < result) {
    min_interval = division;
    return sqrt_recursive(number, min_interval, max_interval)
  }
}

//console.log(sqrt(25))
//console.log(sqrt(7056))

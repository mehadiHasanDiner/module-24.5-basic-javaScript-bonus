// let factorial = 1;

// for (let i = 5; i >= 1; i--) {
//   factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorial(i - 1);
}

const sum = factorial(5);
console.log(sum);

/*
    5 * sum(4)
    5 * 4 * sum(3)
    5 * 4 * 3 * sum(2)
    5 * 4 * 3 * 2 * sum(1)
    5 * 4 * 3 * 2 * 1

    if (i == 1) {
    return 1;
  }
*/

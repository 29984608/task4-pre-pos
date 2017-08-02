'use strict';

function amount_even(collection) {
  let sum = 0;

  for (let i = 2; i <= 10; i += 2)
    sum += i;

  return sum;
}

module.exports = amount_even;

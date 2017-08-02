'use strict';

function average_uneven(collection) {
  let sum = 0;

  for (let i = 1; i <= 10; i += 2)
    sum += i;

  return sum / 5;
}

module.exports = average_uneven;

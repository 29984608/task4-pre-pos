'use strict';

function compute_median(collection) {
  let array = collection.sort((a, b) => a - b > 0 ? 1 : -1);

  if (array.length % 2 !== 0)
    return array[parseInt(array.length / 2)];
  let median = (parseInt(array[array.length / 2 - 1]) + parseInt(array[array.length / 2])) / 2;

  return median;
}

module.exports = compute_median;



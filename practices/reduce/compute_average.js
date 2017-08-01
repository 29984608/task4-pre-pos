'use strict';

function compute_average(collection) {
  let sum = collection.reduce((sum, value) => sum + value);

  return sum / collection.length;

}

module.exports = compute_average;


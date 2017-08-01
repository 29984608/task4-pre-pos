'use strict';

function compute_chain_median(collection) {
  let array = collection.split("->").sort((a, b) => a - b > 0 ? 1 : -1);

  if (array.length % 2 === 0)return (parseInt(array[array.length / 2 - 1]) + parseInt(array[array.length / 2])) / 2;
  return array[parseInt(array.length / 2)];
}

module.exports = compute_chain_median;

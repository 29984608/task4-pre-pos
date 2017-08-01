'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(element => canBeDivisible(collection_b, element))
}
function canBeDivisible(collection, element) {
  return collection.some(temp => element % temp === 0);
}

module.exports = choose_divisible_integer;

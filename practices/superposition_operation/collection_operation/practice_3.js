'use strict';

function hybrid_operation_to_uneven(collection) {
  collection = collection.filter(element => element % 2 !== 0);

  return collection.reduce((sum, value) => sum + value * 3 + 5) + collection[0] * 3 + 4;
}

module.exports = hybrid_operation_to_uneven;


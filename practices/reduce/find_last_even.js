'use strict';

function find_last_even(collection) {
  for (let element of collection.reverse())
    if (element % 2 === 0)
      return element;
}

module.exports = find_last_even;

'use strict';

function find_first_even(collection) {
  for (let element of collection)
    if (element % 2 === 0)
      return element;
}

module.exports = find_first_even;


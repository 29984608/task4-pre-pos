'use strict';

function grouping_count(collection) {

  let groupingCount = {};

  collection.map(element => {
    if (groupingCount[element] !== undefined)
      ++groupingCount[element];
    else
      groupingCount[element] = 1;
  });

  return groupingCount;
}

module.exports = grouping_count;

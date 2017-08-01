'use strict';
var rank_asc = function(collection){
  return collection.sort((a, b) => a - b < 0 ? 1 : -1);
};

module.exports = rank_asc;

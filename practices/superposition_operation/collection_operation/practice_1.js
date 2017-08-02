'use strict';

function hybrid_operation(collection) {
  return collection.reduce((sum,value) => sum+value*3+2)+collection[0]*3+1;
}

module.exports = hybrid_operation;


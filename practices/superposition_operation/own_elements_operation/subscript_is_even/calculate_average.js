'use strict';
var calculate_average = function(collection){
  let evenCollection = collection.filter(element => element % 2 === 0);

  return evenCollection.reduce((sum, value) => sum + value) / evenCollection.length;
};
module.exports = calculate_average;

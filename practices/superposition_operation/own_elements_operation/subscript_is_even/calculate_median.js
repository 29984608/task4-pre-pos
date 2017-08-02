'use strict';
var calculate_median = function(collection){
  let evenCollection = collection.filter(element => element % 2 === 0);

  if (evenCollection.length % 2 === 0)
    return (evenCollection[evenCollection.length / 2 - 1] + evenCollection[evenCollection.length / 2]) / 2;

  return evenCollection[parseInt(evenCollection.length / 2)];
};
module.exports = calculate_median;

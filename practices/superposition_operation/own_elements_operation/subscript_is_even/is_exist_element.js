'use strict';
var is_exist_element = function(collection,element){
  let exist_number_four = false;
  let exist_number_three = false;

  for (let temp of collection) {
    if (temp === 3) exist_number_three = true;
    if (temp === 4) exist_number_four = true;
  }

  return element === 3 ? exist_number_three : !exist_number_four;
};
module.exports = is_exist_element;

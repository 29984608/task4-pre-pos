'use strict';
var even_asc_odd_desc = function(collection){
  let even = [];
  let odd = [];

  for (let temp of collection)
    temp % 2 === 0 ? even.push(temp) : odd.push(temp);

  even.sort((a, b) => a - b > 0 ? 1 : -1);
  odd.sort((a, b) => a - b < 0 ? 1 : -1);

  return even.concat(odd);
};
module.exports = even_asc_odd_desc;

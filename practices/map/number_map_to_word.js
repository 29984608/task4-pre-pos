'use strict';
var number_map_to_word = function(collection){
  let letters = getBasicLetter();

  return collection.map(element => element = letters[element - 1]);
};
function getBasicLetter() {
  let basicLetter = [];
  for (let i = 97; i < 97 + 26; ++i)
    basicLetter.push(String.fromCharCode(i));

  return basicLetter;
};

module.exports = number_map_to_word;

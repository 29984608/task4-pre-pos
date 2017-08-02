'use strict';

function even_to_letter(collection) {
    var letters =getBasicLetter();
    collection=collection.filter(element => element %2 === 0);
    return collection.map(element => element = letters[element -1]);
};
function getBasicLetter() {
  var basicLetter = [];
  for (var i=97;i<97+26;++i){
    basicLetter.push(String.fromCharCode(i));
  }
  return basicLetter;
}

module.exports = even_to_letter;


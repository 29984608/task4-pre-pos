'use strict';

function average_to_letter(collection) {
  var sum = collection.reduce((sum,value) => sum + value);
  return getBasicLetter()[Math.floor(sum/collection.length)];
}
function getBasicLetter() {
  var basicLetter = [];
  for( var i=97;i<97+26;++i){
    basicLetter.push(String.fromCharCode(i));
  }
  return basicLetter;

}

module.exports = average_to_letter;


function collect_same_elements(collection_a, object_b) {
  let sameElements = [];
  let collectionB = object_b.value;

  collection_a.map(obj => {
    if (collectionB.includes(obj.key)) sameElements.push(obj.key);
  });

  return sameElements;
}

module.exports = collect_same_elements;

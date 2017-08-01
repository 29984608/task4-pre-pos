function collect_same_elements(collection_a, object_b) {
  let sameElements = [];
  let collectionB = object_b.value;

  collection_a.map(element => {
    if (collectionB.includes(element)) sameElements.push(element);
  });

  return sameElements;
}

module.exports = collect_same_elements;

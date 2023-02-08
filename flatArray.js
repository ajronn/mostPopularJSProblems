const example = [
  [1,2,3],
  [[4,5,6], [7,8,9]],
  [[10,[11,[12]]]],
];

const flatArray = (table) => {
  if(table.every((i) => !Array.isArray(i))) {
    return table;
  }
  
  return flatArray(table.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
      return [...acc, ...curr];
    }
    return [...acc, curr];
  }, []))
}

console.log(flatArray(example));
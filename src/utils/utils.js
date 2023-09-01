function helper(index, array, result) {
  if (index == array.length) {
    let permutation = "";
    for (let item of array) permutation += item;
    result.push(permutation);
    return;
  }
  for (let i = index; i < array.length; i++) {
    swap(i, index, array);
    helper(i + 1, array, result);
    swap(i, index, array);
  }
}
function swap(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

export function getAllPermutations(array) {
  let result = [];
  helper(0, array, result);
  return result;
}

export function getPossibleDropdownValues(months, selectedValues) {
  let result = [];
  let products = "Product ";
  selectedValues.map(
    (product, inx) =>
      (products +=
        inx != selectedValues.length - 1 ? product + " and " : product)
  );
  months.map((month) => {
    let str = month + " comparison of " + products;
    result.push(str);
  });
  return result;
}

export function getAllPermutationData(compareData, month, permutation) {
  let result = [];
  Object.keys(compareData[month]).map((item) => {
    permutation.map((permut) => {
      if (item.includes(permut)) {
        result.push(...compareData[month][item]);
      }
    });
  });
  return result;
}

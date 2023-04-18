// 병합정렬
function mergingSort(arr, arr2) {
  let answer = [];
  let i = 0;
  let j = 0;
  while (answer.length !== arr.length + arr2.length) {
    if (arr[i] < arr2[j]) {
      answer.push(arr[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
  }
  return answer;
}

// 강사코드
function mergingSortSol(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
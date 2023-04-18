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
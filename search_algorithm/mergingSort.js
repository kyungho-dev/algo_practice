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

// 위 예제에서는 “정렬된 두 배열”을 이용하여 병합 정렬을 만들었다.
//
//   그렇다면 애초에 정렬되지 않은 두 배열을 이용하여 병합 정렬을 하기 위해선 어떻게 해야할까?
//
//   ### Pseudocode
//
// 1. 우선 배열을 반으로 나누는 것을 반복한다. 각 항목(배열 조각)의 길이가 0 또는 1일때까지.
//   강사는 slice 함수 사용하는 것을 추천
// 0 ~ 길이의 반까지를 slice하는데 이걸 재귀적으로 반복하여 위 상태 (각 항목(배열 조각)의 길이가 0 또는 1일때) 까지 반복한다.
// 2. 이렇게 나눈 후에, 이전에 만들었던 병합 정렬(위에 만든 “정렬된 두 배열”을 이용한 병합 정렬)을 이용하여 병합 정렬 진행
// → 원래 배열의 길이가 될때까지

function sliceArr(arr) {

  if (arr.length <= 1) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  let left = sliceArr(arr.slice(0, half));
  let right = sliceArr(arr.slice(half));
  return mergingSortSol(left, right);

}
// Pseudocode
// 1. 배열에서 두 번째 요소를 선택하여 시작
// -> 왜냐하면 맨 처음에는 첫 번째 요소를 "정렬된 부분"으로 간주하기 때문
// 2. 두 번째 값을 취해서 앞에 있는 값과 비교.
// 그리고 필요하다면 둘의 자리를 바꾼다.
// 그런 다음 옆의 요소로 계속하여 올바른 위치에 있는지 확인
// 정렬된 부분을 거치며 반복한다.
// (해당 항목보다 왼쪽 항목들)
// 두 개를 정렬했다면 세번째 요소를 어디에 둘지 확인한다.
// 배열을 정렬할 때까지 반복한 다음 배열에 반환.

function insertionSort(arr) {
  for (let i = 0 ; i < arr.length ; i++) {
    for(let j = 0 ; j < arr.length ; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }
  return arr;
}
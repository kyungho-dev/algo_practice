// 선형 알고리즘

// Linear Search Pseudocode
/*
  - 함수를 작성하는데 이름은 원하는대로 붙이고, 배열과 값을 인수로 사용
  - 배열에 숫자가 포함되고, 값은 또다른 숫자라고 할 경우, 전체 배열에 대한 루프를 만들고
  현재 확인중인 배열 항목이 우리가 입력하는 값과 동일한지 확인
  - 동일하다면 해당 값의 인덱스를 반환하고, 끝까지 찾을 수 없다면 -1을 반환
 */

function linearSearch(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let answer = -1;

  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === num) answer = i;
  }

  return answer;
}


// 강사 코드
function linearSearchSol(arr, val) {

  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}


// Binary Search (이진 검색)
// 선형 검색보다 개선된 방법
// 중요한점!!!
// 이진 검색은 분류 된 데이터에서만 가능하다!
// 작은수 -> 큰수 같은 식으로
// 알파벳 순이라던지!

// 1. 분류된 배열, 숫자로만 돼있음
// 2개의 변수를 만듦
// 하나는 계산을 시작하는 좌측을 나타내는 인덱스로
// 포인터라고 한다
// 우측 포인터는 배열 길이 - 1 이다.
// 두가지를 확인할것이다.
// 우선 목표 값을 만났는가?
// 두번째 조건은 : 좌측 포인터가 우측 포인터보다 앞에 있는 동안만 연산이 일어나라

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }

  return middle;
}

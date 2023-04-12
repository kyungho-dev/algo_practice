
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
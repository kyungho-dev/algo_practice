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

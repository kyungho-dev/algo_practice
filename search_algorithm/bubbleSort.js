// 바깥 for문을 0부터 순회하는 방식 (비추)
// 마지막에 j + 1에서 undefined 나오므로 (array out of bounds)
function bubbleSort1(arr) {
  for (let i = 0 ; i < arr.length ; i++) {
    for (let j = 0 ; j < arr.length ; j++) {
      if (arr[i] > arr[j + 1]) {
        console.log("자리 바뀜")
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// 바깥 for문 length 부터 0까지 순회하는 방식
function bubbleSort2(arr) {
  for (let i = arr.length ; i > 0 ; i--) {
    for (let j = 0 ; j < i - 1 ; j++) {
      if (arr[i] > arr[j + 1]) {
        console.log("자리 바뀜")
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// ES2015 적용한 버전 (화살표 함수, 전개 연산 등)
function bubbleSortES2015(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1, idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length ; i > 0 ; i--) {
    for (let j = 0 ; j < i - 1 ; j++) {
      if (arr[i] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// 최적화 버전
// 필요 없는 순환 줄이기
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length ; i > 0 ; i--) {
    for (let j = 0 ; j < i - 1 ; j++) {
      if (arr[i] > arr[j + 1]) {
        console.log("자리 바뀜")
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    // 바뀔것 없으면 순환 종료
  }
  return arr;
}
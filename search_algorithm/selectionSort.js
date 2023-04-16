// 선택 정렬

// pseudocode
// 1. 최솟값을 저장할 변수 만들기, 정렬의 첫번째 값이 가장 작은 값
// 2. 진행하며 다음 항목과 비교, 다음 항목이 작을 경우 해당 다음 항목을 "가장 작은 변수" 값으로 갱신
// 3. 처음 시작한 값, 인덱스가 최솟값이 아니라면 두 값을 바꾼다.
function selectionSort(arr) {
  let minIdx = 0;

  for (let i = 0 ; i < arr.length ; i++) {
    minIdx = i;
    for (let j = i + 1 ; j < arr.length ; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    if (minIdx !== i) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

function selectionSortSol(arr) {
  for (let i = 0 ; i < arr.length ; i++) {
    let lowest = i;
    for (let j = i + 1 ; j < arr.length ; j++) {
      if (arr[j] > arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 적용한 방법
function selectionSortSol2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  for (let i = 0 ; i < arr.length ; i++) {
    let lowest = i;
    for (let j = i + 1 ; j < arr.length ; j++) {
      if (arr[j] > arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, i , lowest);
    }
  }
  return arr;
}
// pivot helper 구현
function pivot(arr) {
  let pivIdx = 0;
  let largeIdx = 0;
  let firstVal = arr[0];
  for (let i = 1 ; i < arr.length ; i++) {
    if (firstVal > arr[i]) {
      pivIdx++;
      if (largeIdx !== 0) {
        let temp = arr[largeIdx];
        arr[largeIdx] = arr[i];
        arr[i] = temp;
      }
    } else {
      largeIdx = i;
    }
  }
  if (pivIdx !==0) {
    let temp = arr[pivIdx];
    arr[pivIdx] = firstVal;
    arr[0] = temp;
  }
  return arr;
}

// 강사 코드
function pivotSol(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1 ; i < arr.length ; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
}

function quickSortSol(arr, left = 0 , right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivotSol(arr, left, right); // 3
    // left
    quickSortSol(arr, left, pivotIndex - 1);
    // right
    quickSortSol(arr, pivotIndex + 1, right);
  }
  return arr;
}
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
// 기수 정렬

// 자릿수 얻는 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Radix sort helper 함수
// 숫자가 몇자리수인지 파악 : 1의 자리 10의 자리...
function digitCount(num) {
  // log10 0 은 -Infinity 이므로 예외처리
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 가장 큰 자릿수 구하는 helper
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// 기수 정렬 Pseudocode
// 1. 수 배열을 인자로 받는 함수를 정의
// 2. 가장 큰 수가 몇 자리 수인지 알아내기
// 3. 반복문 시작, 0부터 가장 큰 자릿수까지
// 4. 진행할 때마다, 각 자릿수에 버킷을 만든다. (여기서 버킷은 빈 배열) (하위 배열이 10개 있는 배열이겠지..! 0 ~ 9)
// 5. 반복문을 수행하면서 각각의 수를 올바른 버킷에 넣는다.
//   -> kth digit (k 자릿수)란 루프 k가 무엇이든 0에서 시작하며 각 수를 올바른 위치, 올바른 버킷 슬롯에
//   0자리를 사용하여 분류하고, 다음으로는 첫째 자리, 둘째 자리를 이용한다는 것이다.
// 6. 기존 배열을 버킷의 값으로 교체하기

// 기수정렬 구현
function radixSort(arr) {

  const maxDigit = mostDigits(arr);
  let tempArr = [];
  let sortedArr = []
  for (let i = 0 ; i < maxDigit ; i++) {
    sortedArr = [];
    for (let j = 0 ; j < 10 ; j++) {
      tempArr[j] = [];
      for (let k = 0 ; k < arr.length ; k++) {
        if (getDigit(arr[k], i) === j) tempArr[j].push(arr[k]);
      }
    }
    for (let j = 0 ; j < 10 ; j++) {
      sortedArr.concat(tempArr[i]);
    }
  }
  return sortedArr;
}

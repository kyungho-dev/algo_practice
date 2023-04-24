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
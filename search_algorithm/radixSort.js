// 기수 정렬

// 자릿수 얻는 함수
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Todo :기수 정렬 만들기
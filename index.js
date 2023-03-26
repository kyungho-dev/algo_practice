// test

const init = () => {
  console.log("IT's init console!");
  console.log("-------------------------------------");
  console.log("-------------------------------------");

  // bigONotation();

  // 문자열 갯수
  console.log(charCount("hello"));

}

const bigONotation = () => {
  function addUpTo(n) {
    let total = 0;
    for (let i = 1 ; i  <= n ; i++) {
      total += i;
    }
    return total;
  }

  function addUpTo2(n) {
    return n * (n + 1) / 2;
  }
  console.log(addUpTo(100));
  console.log(addUpTo2(100));
}

// function charCount(str) {
//   // 마지막에 반환할 객체 만들기
//   // 문자열 순환 (문자열 내 각 char)
//     // 만약 순환하며 만나는 char가 'number/문자열이고', '객체에 key로 존재하면' 해당 키의 값에 + 1
//     // 만약 순환하며 만나는 char가 'number/문자열이고', '객체에 없다면', 해당 char를 키로 추가하고 value를 1로 셋
//     // 만약 순환하며 만나는 char가 다른 어떤 것(공백, 마침표 etc.)라면 아무것도 하지 않음
//   // 결과값 return
//
//   // 마지막에 반환할 객체 만들기
//   const result = {};
//   // 문자열 순환 (문자열 내 각 char)
//   for(let i = 0 ; i < str.length ; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {  // 알파벳 혹은 숫자
//       if (result[char] > 0) { // 0보다 크면 이미 객체에 조재한다는 것
//         // 만약 순환하며 만나는 char가 'number/문자열이고', '객체에 key로 존재하면' 해당 키의 값에 + 1
//         result[char]++;
//       } else {  // 아직 ㅐㄱ체에 없다면
//         // 만약 순환하며 만나는 char가 'number/문자열이고', '객체에 없다면', 해당 char를 키로 추가하고 value를 1로 셋
//         result[char] = 1;
//       }
//     }
//   }
//   // 만약 순환하며 만나는 char가 다른 어떤 것(공백, 마침표 etc.)라면 아무것도 하지 않음
//   // 결과값 return
//   return result;
// }

// 리팩토링
function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // 있으면 더하고 없으면 1 할당
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// 정규표현식이 브라우저에 따라 적용이 다를 수도 있고
// 정규 표현식보다 code 비교가 더 빠르다.
// 실제로는 정규식을 더 많이 쓰겠지만
// 면접시 이런거 말하면 좋을것같다는 의미...정도..
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&  // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 47 && code < 58)) { // lower alpha (a-z)
    return false;
  }
  return true;
}

init();
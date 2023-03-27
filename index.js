// test

const init = () => {
  console.log("IT's init console!");
  console.log("-------------------------------------");
  console.log("-------------------------------------");

  // bigONotation();

  // 문자열 갯수
  // console.log(charCount("hello"));

  // 빈도수 세기
  // same([1,2,3,2], [9,1,4,4]);

  // 애너그램 연습
  console.log(validAnagram('cat', 'rat'));

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

// 빈도수 세기 패턴 Chap.27
function oldSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0 ; i < arr1.length ; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    // indexOf도 배열을 순환하기 때문에
    // 이 접근 방법은 O(n^2) 방법이다.
    // 가능한 중첩된 반복문은 사용하지 않는게 좋다.
    // 개별의 반복문 두개가 중복된 반복분보다 좋다!!
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// 위에 선언한 same을 개선해보자 (중복된 반복문 없애기)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

// 애너그램 예제, 내가 푼 방식
function validAnagram(str1, str2) {

  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  return JSON.stringify(obj1) === JSON.stringify(obj2)

}

init();
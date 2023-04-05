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
  // console.log(validAnagram('cat', 'rat'));

  // 합이 0이 되는 배열 찾기
  console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
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
function validAnagramByKyungho(str1, str2) {

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

// 강사 코드
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0 ; i < first.length ; i++) {
    let letter = first[i];

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0 ; i < second.length ; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// 배열에서 합이 0이 되는 조합을 찾아 반환
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// 애너그램 과제
function validAnagramTest(str, str2){
  // add whatever parameters you deem necessary - good luck!
  const first = {};
  const second = {};

  if (str.length !== str2.length) return false;
  if (str === str2) return true;

  for (let char of str) {
    //   first[char] = first[char] ? first[char]++ : 1;
    if (first[char]) first[char]++;
    else first[char] = 1;
  }
  for (let char of str2) {
    if (first[char] > 0) first[char]--;
    else return false;
    //   second[char] = second[char] ? second[char]++ : 1;
  }
  return true;
}

// unique value 찾기 과제
function countUniqueValuesTest(arr){
  // add whatever parameters you deem necessary - good luck!
  const obj = {};
  let answer = 0;
  if (arr.length === 0) return 0;
  else {
    for(let i = 0 ; i < arr.length ; i++) {
      let temp = arr[i];
      if(obj[temp]) obj[temp]++;
      else obj[temp] = 1;
    }
  }
  return Object.keys(obj).length;
}

// 강사 코드
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length ; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
// [1, 1, 2, 3, 3, 4, 4, 5, 6, 6, 7] 이런 input이 들어오면 위 코드를 통해
// [1, 2, 3, 4, 5, 6, 7, 5, 6, 6, 7] 이 되고, i는 6이 돼서 return 은 i +1 = 7 이 된다.


// 기준점 간 이동 배열 패턴 (Chap.33)
// input: [1, 2, 5, 2, 3, 4, 8, 2], 3
// 배열중 3개 연속된 숫자의 합이 가장 큰 애들 return
function maxSubarraySumNotGood(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0 ; i < arr.length - num + 1 ; i++) {
    let temp = 0;
    for (let j = 0 ; j < num ; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
// 위 방식은 효율이 좋지 않다.
// 아래 방식은 O(N)의 복잡도를 갖는다.
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0 ; i < num ; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = num ; i < arr.length; i++) {
    // 3개를 더한다고 했을때 (인덱스 기준) 0, 1, 2의 합에서 0번을 뺴고 3번을 더하는것
    // "이걸 슬라이딩 윈도우" 라고 하는지는 모르겠지만
    // 수업중에는 그렇게 지칭함!
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// frequency counter 예제
function sameFrequencyTest(num1, num2){
  // good luck. Add any arguments you deem necessary.
  const str = String(num1);
  const str2 = String(num2);

  if (str.length !== str2.length) return false;

  const first = {};
  const second = {};

  for (let char of str) {
    if (first[char]) first[char]++;
    else first[char] = 1;
  }


  for (let char of str2) {
    if (first[char] > 0) first[char]--;
    else return false;
  }
  return true;
}

// same frequency 강사코드
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// 중복된 데이터 있는 경우 강사 코드
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
      return true
    }
    start++
    next++
  }
  return false
}


// frequency Counter2 예제
// Multiple Pointers
function areThereDuplicatesTest(...items) {
  // good luck. (supply any arguments you deem necessary.)
  const first = {};
  for (let item of items) {
    if (first[item]) return true;
    else first[item] = 1;
  }
  return false;
}

// 배열 내 두수의 평균이 두번째 인자와 같은지 찾는 함수 예제
function averagePair(arr, avg){
  // add whatever parameters you deem necessary - good luck!

  if (arr.length < 1) return false;

  let left = 0;
  let right = arr.length - 1;
  const sum = avg * 2;

  while (left < right) {
    if (arr[left] + arr[right] === sum) return true;
    else if (arr[left] + arr[right] > sum) right--;
    else if (arr[left] + arr[right] < sum) left++;
  }
  return false;

}

// string으로 된 두개의 파라미터를 받고, 첫번째 파라미터의 글자들이 두번째 파라미터에 순서대로 나오는 경우 true
function isSubsequenceTest(str, str2) {
  // good luck. Add any arguments you deem necessary.
  for (let i = 0 ; i < str2.length ; i++) {
    let a = 0;
    if (str[a] === str2[i]) {
      str = str.substr(a + 1);
      a++;
    }
  }
  if (str.length === 0) return true;
  else return false;

}

// sliding window 예제
function maxSubarraySumTest(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (num > arr.length) return null;
  else {

    let maxSum = 0;
    let sum = 0;
    for (let i = 0 ; i < num ; i++) {
      sum = maxSum += arr[i];
    }

    for (let i = num ; i < arr.length ; i++) {
      sum = sum - arr[i - num] + arr[i];
      console.log("MAXSUM : " , maxSum)
      console.log("sum : " , sum)
      if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
  }
}

// 강사 코드
function minSubArrayLenSol(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
      end++;
    }
      // if current window adds up to at least the sum given then
    // we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// 연속된 가장 긴 서로 다른 문자열 길이, 강사코드
function findLongestSubstringSol(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// Chap.42 재귀 나애 wakeUp() 은 콜스택 설명 예시
function takeShower() {
  return "Showering";
}

function eatBrakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
  takeShower();
  eatBrakfast();
  console.log("OK ready to go to work!");
}

// 재귀 예시
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// 재귀 예시2
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// 재귀 예시3
function factorial(num) {
  // for loop로 구현한 팩토리얼
  // let total = 1;
  // for(let i = num ; i > 0; i--) {
  //   total *= i;
  // }
  // return total;

  // 재귀로 구현한 팩토리얼
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// helper 함수를 활용한 재귀
function collectionOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(nums);

  return result;
}

// helper함수를 이용하지 안혹 순수 함수를 이용한 방법
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// 재귀를 이용하여 제곱을 구하는 방법
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(num1, num2) {

  let answer = 1;

  function pow(num) {
    if (num === 0) return 1;
    return num1;
  }

  for(let i = num2 ; i >= 0 ; i--) {
    answer *= pow(i);
  }
  return answer;

}


init();
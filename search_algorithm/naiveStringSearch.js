// 긴 문자열에서 부분 문자열을 찾는 것과 관련된 알고리즘
// 이것도 직접 구현
// 우선 Pseudocode
// 문자열 2개를 사용하는 함수 정의 (긴 문자열과 찾고자 하는 문자열을 인자로 받음)
// 1. 긴 문자열의 각 문자를 반복
// 2. 그 안에서 짧은 문자열을 중첩 반복하고
// 3-1. 문자가 일치하지 않으면 내부 루프에서 벗어남!
// 3-2. 문자열이 일치하면? 그럼 다음문자로 넘어가기
// count는 0에서 시작하고 return count
// 짧은 문자열의 끝에 도달했는데 아직 루프에서 벗어나지 못했으면 카운터에 + 1

function findString(bigger , keyword) {

  let cnt = 0;

  for (let char of bigger) {

    for (let i = 0 ; i < keyword.length ; i++) {

      if (char !== keyword[i]) break

    }

  }

}
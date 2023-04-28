/**
 *  노드는 단지 "val" 혹은 "value" 라고 불리는 단일 데이터 항목을 저장하고
 * 이어서 호출될 다음 노드들에 대한 참조 정보인 "next"를 저장한다.
 *
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // 처음에는 아직 다음 노드가 없기 떄문에 null로 초기화
  }
}

// first 라는 변수가 Hi 라는 문자열을 인자로 받아들여서
// new 키워드를 통해 생성된 Node 클래스와 같도록 설정
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");
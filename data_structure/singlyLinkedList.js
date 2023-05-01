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

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop 구현하기
  // list의 tail 찾기를 위한 traverse 구현
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

}

/**
 * push method 의 pseudocode
 * 주어진 값을 받아들인 후 그것을 이용해 새로운 노드를 생성하는 것
 * !! 만일 헤드가 없다면 리스트가 비어있다는 것을 의미한다.
 * !! 비어있는 리스트에 처음에 80을 삽입했을 때 헤드와 테일이 모두 80을 가리키도록 했던 것이
 * 바로 그 에이다.
 * !! 만일 리스트가 비어있지 않다면, 마지막 노드의 "next"를 새롭게 생성된 노드를 가리키도록 하고,
 * 테일이 새롭게 생성된 노드를 가리키도록 설정하면 된다.
 * 그리고 length 를 1 증가
 */



// first 라는 변수가 Hi 라는 문자열을 인자로 받아들여서
// new 키워드를 통해 생성된 Node 클래스와 같도록 설정
// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList()
list.push("Hello");
list.push("Goodbye!");
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
  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
  /**
   * pop() 구현학 pseudocode
   * pop() 함수는 어떤 변수나 데이터도 인자로 받을 필요 없다.
   * 마지막 노드만 추출하는것
   * 만일 리스트에 아무것도 없을 경우 undefined 반환
   * 리스트가 비어있는지 확인하려면
   *  1. head가 null 인지
   *  2. 혹은, 길이가 0 인지 확인하면 된다.
   * 그렇지 않다면 리스트를 돌면서 마지막 tail을 찾는다
   * 그러나 마지막 바로 전 노드를 찾아야 하기 때문에 쉽지 않다!
   * 따라서 tail에 이를때까지 계속 따라가고, 동시에 이전 노드가 어떤 것이었는지 항상 추적해야한다.
   *
   */
  pop() {
    // 내 코드
    // if (!this.head || this.length === 0) {
    //   return undefined;
    // } else {
    //   let current = this.head;
    //   while (current) {
    //     current = current.next;
    //   }
    // }
    // 강사 코드
    if (!this.head) return undefined;
    // 변수를 두개 만드는데 하나는 현재 노드인 current와
    // 이전 노드인 previous , 아래 구현에서는 newTail 이겠지!
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;  // newTail은 늘 current의 하나 앞 노드를 가리키겠지
      current = current.next;
    }
    // pop을 실행하면 current는 마지막 노드를 가리키고
    // newTail은 그 앞 노드를 가리키고
    this.tail = newTail;
    // pop 실행 후 다음 노드는 비워주기로 했으므로 null 할당
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return값은 마지막 값 (위에 지워지겠지만! current에는 할당돼있으므로)
    return current;
  }

  // shift 구현하기
  /**
   * shift 는 리스트의 맨 앞 노드를 제거한다.
   * head를 제거하고, 두번째 노드를 head 에 할당하는 것
   * 제거된 맨앞 head는 return
   */
  // shift의 pseudocode
  /**
   * 1. 노드가 없을 경우 undefined 반환.
   * 2. 노드가 존재할 경우 현재의 head 속성을 변수에 저장하고,
   * 3. 현재 head의 next 노드를 헤드가 가리키도록 업데이트하고,
   * 4. list 길이 1 감소시키고,
   * 5. 제거된 head 노드를 return
   */
  shiftMyCode() {
    if (!this.head) return undefined;

    let head = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.length--;
    }
    return head;
  }

  // shift() 강사 코드
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  /**
   * unshift() pseudocode
   * 1. 값을 인자로 받는 함수를 생성, 해당 값을 새로운 노드로 추가
   * 2. 헤드가 있는지를 체크하고, 없다면 head와 tail 모두 새로운 노드를 가리키도록 설정
   * 3. 노드가 이미 있다면, 새롭게 생성된 노드의 next를 현재의 head값으로 설정
   * 4. 새롭게 생성된 노드를 this.haed가 가리키도록 하고, 길이를 1 증가하고 해당 linkedList 를 return
   */
  myUnshift(val) {
    if (!this.head) {
      this.head = val;
      this.tail = val;
    }
    let currentHead = this.head;
    this.head = val;
    this.head.next = currentHead;
    this.length++;
    return this;
  }

}




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
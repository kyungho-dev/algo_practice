class StudentOld {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function(a, b) {return a+b;})
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Colt", "Steele");
firstStudent.fullName(); // "Colt Steele"
// firstStudent가 Student라는 인스턴스의 함수를 사용한 것.

// static 인스턴스메서드 사용하기
class StudentClassMethod {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  static EnrollStudents(...students) {
    // maybe send an email here
  }
}

let firstMan = new StudentClassMethod("John", "Doe");

// static으로 선언된 인스턴스 함수(위에서는 enrollStudents)는
// 특정 인스턴스와는 무관하다.
// 이것은 일반적은 종합 기능 혹은 유틸리티 펑션 등과 같이
// 그냥 필요한 클래스의 한 부분이라고 할 수 있다.
// 일반적으로 대문자로 시작하도록 한다.
// 일반 함수의 경우
firstMan.fullName() // 위처럼 접근이 가능하다.
// 그러나 static 으로 선언한 함수의 경우
firstMan.EnrollStudents()
// 처럼 접근이 불가능하고
StudentClassMethod.EnrollStudents()
// 로 접근이 가능하다.
//  이 강의에서 static 메서드를 사용하는건 거의 없긴 하다!
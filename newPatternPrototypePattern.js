function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"]; // 자기 자신을 매개변수로 받는 프로퍼티와 배열 프로퍼티 한개를 가진 Person 생성자
};

Person.prototype = { // Person 생성자의 프로토타입에 프로퍼티 할당
  constructor : Person, // 명시적인 호출 함수 지정
  sayName : function() { 
    alert(this.name); // this의 name을 출력하는 sayName메서드
  }
};

var person1 = new Person("Nicholas", 29, "Software Engineer"); // Person 생성자의 인스턴스 형성
var person2 = new Person("Greg", 27, "Doctor"); // 또다른 인스턴스 형성

person1.friends.push("Van"); // 인스턴스에 friends 프로퍼티 푸쉬 (프로토타입에도 )
alert(person1.friends) // Shelby, Court, Van
alert(person2.friends) // Shelby, Court
alert(person1.friends === person2.friends) // false
alert(person1.sayName === person2.sayName) // true



function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  if (typeof this.sayName != "function") {
    Person.prototype.sayName = function() {
      alert(this.name);
    };
  }
}

var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();
//factory Pattern
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  };
  return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");


// 생성자 패턴
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

// 명시적으로 객체를 생성하지 않습니다.
// 프로퍼티와 메서드는 this 객체에 직접적으로 할당됩니다.
// return 문이 없습니다.

console.log(person1 instanceof Object); // 객체 타입을 참조하면서
console.log(person1 instanceof Person); // 동시에 Person 생성자 함수도 참조
console.log(person2 instanceof Object);
console.log(person2 instanceof Person);

// 생성자를 직접 만들면 인스턴스 타입을 쉽게 식별가능. 이는 팩터리 패턴에 비해 대단한 장점.
// person1과 person2는 모두 Object의 인스턴스인데 커스텀 객체는 모두 Object를 상속하기 때문.
// 이런 식으로 정의한 생성자는 Global 객체에서 정의 됨.

var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();

Person("Greg", 27, "Doctor");
window.sayName();

var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();

// 생성자의 문제점

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = new Function("alert(this.name)")
}

// 함수 이름이 같더라도 인스턴스가 다르면 둘은 다른 함수.

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}

function sayName() {
  alert(this.name);
}

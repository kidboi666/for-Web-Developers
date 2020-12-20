// 고유 변수

function Person(name) {
  this.getName = function() {
    return name;
  }
  this.setName = function(value) {
    name = value;
  };
}

var person = new Person("Nicholas");
alert(person.getName()); // Nicholas
person.setName("Greg");
alert(person.getName()); // Greg
// 고유 및 특권 멤버를 정의해서 데이터를 직접적으로 수정할 수 없게 보호할 수 있습니다.

// 정적 고유 변수

(function() {
  var name = "";

  Person = function(value) {
    name = value; // name 변수는 정적이 되고 모든 인스턴스에서 공유됩니다.
  }; // 새 생성자를 호출해서 새 인스턴스를 생성하면 모든 인스턴스가 같은 값을 반환합니다.

  Person.prototype.getName = function() {
    return name;
  };

  Person.prototype.setName = function(value) {
    name = value; // setName을 호출해도 모든 인스턴스가 영향을 받습니다.
  };
})(); 

var person1 = new Person("Nicholas");
alert(person1.getName()); // Nicholas
person1.setName("Greg");
alert(person1.getName()); // Greg

var person2 = new Person("Michael");
alert(person1.getName()); // Michael
alert(person2.getName()); // Michael // 따라서 모든 인스턴스가 같은 값을 반환합니다.
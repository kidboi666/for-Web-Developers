function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = ["Shelby", "Court"];
};

Person.prototype = {
  constructor : Person,
  sayName : function() {
    alert(this.name);
  }
};

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");
alert(person1.friends)
alert(person2.friends)
alert(person1.friends === person2.friends)
alert(person1.sayName === person2.sayName)


//

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
function Person() {}

Person.prototype = {
  constructor: Person,
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function() {
    alert(this.name);
  }
}
  


// 
function Person() {}

Person.prototype = {
  name : "Nicholas",
  age : 29,
  job : "Software Engineer",
  sayName : function() {
    alert(this.name);
  }
}

Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person
});
function SuperType() {
  this.colors = ["red", "blue", "green"];
}

function SubType() {
}

SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors);

var instance2 = new SubType();
alert(instance2.colors);
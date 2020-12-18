function SuperType() {
  this.property = true;
}

superType.prototype.getSuperValue = function() {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype = {
  getSubValue : function() {
    return this.subproperty;
   },
   someOtherMethod : function() {
     return false;
   }
};

var instance = new SubType();
alert(instance.getSuperValue());
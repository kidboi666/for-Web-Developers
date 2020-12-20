var singleton = function() {
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }

  var object = new CustomType();

  object.publicProperty = true;
  object.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  };

  return object;
}
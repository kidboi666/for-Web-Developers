var book = {}; // 새 객체 생성

Object.defineProperties(book, { // Object 생성자로 프로퍼티 접근자인 defineProperties로 book 변수를 선택
  _year: {  // 객체의 메서드를 통해서만 접근할 것이고 객체 외부에서는 접근하지 않겟다는 의도를 나타낸 _year를 생성, 값으로 2004를 줌
    value: 2004
  },

  edition: {
    value: 1
  },

  year: { // year 메소드에는 프로퍼티 호출 값인 get과 set을 사용 
    get: function() {
      return this._year; // book의 _year를 가져옴
    },
    
    set: function(newValue) {  
      if (newValue > 2004) { // 매개변수에 오는 값이 2004보다 크다면 
        this._year = newValue; // book의 _year에 매개변수에 가져온 값을 할당
        this.edition += newValue - 2004; // book의 edition에 매개변수에 가져온 값을 뺀 값을 할당
      }
    }
  }
});


book.year = 2005;
alert(book.edition); // 2

var descriptor = Object.getOwnPropertyDescriptor(book, "_year"); // getOwnPropertyDescriptor(읽어올 프로퍼티가 포함된 객체, 서술자를 가져올 프로퍼티 이름) 메서드를 이용해 원하는 프로퍼티의 서술자 프로퍼티를 읽을 수 있습니다.
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);
var descriptor2 = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor2.value)
console.log(descriptor2.enumerable);
console.log(typeof descriptor2.get);









// 구식 접근자 지원

var book = {
  _year: 2004,
  edition: 1
};

book.__defineGetter__("year", function() {
  return this._year;
});

book.__defineSetter__("year", function(newValue) {
  if (newValue > 2004) {
    this._year = newValue;
    this.edition += newValue - 2004;
  }
});

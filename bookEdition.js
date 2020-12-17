var book = {}; // 새 객체 생성

Object.defineProperties(book, { // Object 생성자로 프로퍼티 접근자인 defineProperties로 book 변수를 선택
  _year: {  // 프로퍼티 접근자로만 접근하겠다는 의지를 가진 _year를 생성 값으로 2004를 줌
    value: 2004
  },

  edition: {
    value: 1
  },

  year: { // year 메소드에는 프로퍼티 호출 값인 get과 set을 사용 
    get: function() {
      return this._year; // book의 _year를 가져옴
    },
    
    set: function(newValue) {  // 매개변수에 오는 값이 2004보다 크다면 
      if (newValue > 2004) { 
        this._year = newValue; // book의 _year에 매개변수에 가져온 값을 할당
        this.edition += newValue - 2004; // book의 edition에 매개변수에 가져온 값을 뺀 값을 할당
      }
    }
  }
})
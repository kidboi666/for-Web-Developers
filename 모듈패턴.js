// 싱글톤이란 인스턴스를 단 하나만 갖게 의도한 객체입니다.
var singleton = {
name : value,
method : function() {
    // 메서드 코드
  }
};

// 모듈 패턴은 다음 형식에 따라 기본 싱글톤을 확장해서 고유 변수와 특권 메서드를 쓸 수 있습니다.

var singleton = function() {
  var privateVariable = 10;

  function privateFunction() {
    return false;
  }
  
  return {
    
    publicProperty : true,

    publicMethod : function() {
      privateVariable++;
      return privateFunction();
    }
  };
}();

// 싱글톤에 일종의 초기화가 필요하고 고유 변수에 접근해야 할 때 유용합니다.

var application = function() {
  var components = new Array();

  components.push(new baseComponents());

  return {
    getComponentCount : function() {
      return components.length; // 등록된 구성 요소 숫자를 반환
    },

    registerComponent : function() {
      if (typeof component == 'object') {
        components.push(component); // 새 구성 요소를 등록
      }
    }
  };
}();

// 단 하나의 객체를 반드시 생성하고 몇 가지 데이터를 가지며 또한 고유 데이터에 접근 가능한 공용 메서드를 외부에 노출하도록 초기화 해야 할 때 유용 합니다.
// 이런 식으로 생성한 싱글톤은 객체 리터럴을 이용했으므로 모두 Object의 인스턴스 입니다.
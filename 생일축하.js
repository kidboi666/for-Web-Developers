function 새해() {
  var now = new Date();
  if (now.getMonth() == 0 && now.getDate() == 1) {
    alert(`Happy new year!`);
  }
}

(function() {
  var now = new Date();
  if (now.getMonth() == 0 && now.getDate() ==1) {
    alert(`Happy new year!`)
  }
})  // var로 코드 블록 스코프 흉내내기 

function 새해() {
  const now = new Date();
  if (now.getMonth() == 0 && now.getDate() == 1) {
    alert(`Happy new year!`);
  }
} // 
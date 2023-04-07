let arr = ["hi", "name", 3];


window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button); //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};

window.onscroll = function (uiEvent) {
  console.log(uiEvent.button); //<- Error!
};
function seachActive() {
  var seachActiveLine = document.getElementById("seach-form-line");
  var seachActiveButton = document.getElementById("seach-form-button");
  seachActiveLine.style.display = "inline-block";
  seachActiveButton.style.display = "inline-block";
}
function slideActive1() {
  var x = document.getElementById("slide-1");
  var y = document.getElementById("slide-2");
  var z = document.getElementById("slide-3");
  x.style.display = "grid";
  y.style.display = "none";
  z.style.display = "none";
}
function slideActive2() {
  var x = document.getElementById("slide-1");
  var y = document.getElementById("slide-2");
  var z = document.getElementById("slide-3");
  y.style.display = "grid";
  x.style.display = "none";
  z.style.display = "none";
}
function slideActive3() {
  var x = document.getElementById("slide-1");
  var y = document.getElementById("slide-2");
  var z = document.getElementById("slide-3");
  z.style.display = "grid";
  y.style.display = "none";
  x.style.display = "none";
}
function infoSlideActive1() {
  var x = document.getElementById("right-side1");
  var y = document.getElementById("right-side2");
  var z = document.getElementById("right-side3");
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}
function infoSlideActive2() {
  var x = document.getElementById("right-side1");
  var y = document.getElementById("right-side2");
  var z = document.getElementById("right-side3");
  y.style.display = "block";
  x.style.display = "none";
  z.style.display = "none";
}
function infoSlideActive3() {
  var x = document.getElementById("right-side1");
  var y = document.getElementById("right-side2");
  var z = document.getElementById("right-side3");
  z.style.display = "block";
  y.style.display = "none";
  x.style.display = "none";
}
function showMap(){
  var x = document.getElementById("full-map");
  x.style.display = "block";
}
function closeMap(){
  var x = document.getElementById("full-map");
  x.style.display = "none";
}
function openFeedbackForm(){
  var x = document.getElementById("feedback-form-container");
  x.style.display = "block";
}
function closeFeedbackForm(){
  var x = document.getElementById("feedback-form-container");
  x.style.display = "none";
}
function closeSeach(){
  var seachActiveLine = document.getElementById("seach-form-line");
  var seachActiveButton = document.getElementById("seach-form-button");
  seachActiveLine.style.display = "none";
  seachActiveButton.style.display = "none";
}
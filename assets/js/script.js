//Navbar Scrolling Effect
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.background = "#fff";
    document.getElementById("nav").style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.20)";
    document.getElementById("nav-1").style.color = "#000";
    document.getElementById("nav-2").style.color = "#000";
    document.getElementById("nav-3").style.color = "#000";
    document.getElementById("nav-btn").style.color = "#000";
    //Navbar Text Hover
    document.getElementById("nav-1").onmouseover = function () { mouseOver1() };
    document.getElementById("nav-1").onmouseout = function () { mouseOut1() };

    document.getElementById("nav-2").onmouseover = function () { mouseOver2() };
    document.getElementById("nav-2").onmouseout = function () { mouseOut2() };

    document.getElementById("nav-3").onmouseover = function () { mouseOver3() };
    document.getElementById("nav-3").onmouseout = function () { mouseOut3() };
  } else {
    document.getElementById("nav").style.background = "transparent";
    document.getElementById("nav").style.boxShadow = "none";
    document.getElementById("nav-1").style.color = "#fff";
    document.getElementById("nav-2").style.color = "#fff";
    document.getElementById("nav-3").style.color = "#fff";
    document.getElementById("nav-btn").style.color = "#fff";
    //Navbar Text Hover
    document.getElementById("nav-1").onmouseover = function () { mouseOverblack1() };
    document.getElementById("nav-1").onmouseout = function () { mouseOutblack1() };

    document.getElementById("nav-2").onmouseover = function () { mouseOverblack2() };
    document.getElementById("nav-2").onmouseout = function () { mouseOutblack2() };

    document.getElementById("nav-3").onmouseover = function () { mouseOverblack3() };
    document.getElementById("nav-3").onmouseout = function () { mouseOutblack3() };
  }
}
function mouseOver1() {
  document.getElementById("nav-1").style.color = "#AAD758";
}
function mouseOver2() {
  document.getElementById("nav-2").style.color = "#AAD758";
}
function mouseOver3() {
  document.getElementById("nav-3").style.color = "#AAD758";
}
// mouseOut
function mouseOut1() {
  document.getElementById("nav-1").style.color = "#000";
}
function mouseOut2() {
  document.getElementById("nav-2").style.color = "#000";
}
function mouseOut3() {
  document.getElementById("nav-3").style.color = "#000";
}
// mouseOver
function mouseOverblack1() {
  document.getElementById("nav-1").style.color = "#AAD758";
}
function mouseOverblack2() {
  document.getElementById("nav-2").style.color = "#AAD758";
}
function mouseOverblack3() {
  document.getElementById("nav-3").style.color = "#AAD758";
}
// mouseOut
function mouseOutblack1() {
  document.getElementById("nav-1").style.color = "#fff";
}
function mouseOutblack2() {
  document.getElementById("nav-2").style.color = "#fff";
}
function mouseOutblack3() {
  document.getElementById("nav-3").style.color = "#fff";
}
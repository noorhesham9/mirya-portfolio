let haeder = document.getElementById("header");
let myWidth = window.innerWidth;

// window.onscroll = WindowSize;
window.onscroll = function () {
  if (window.scrollY >= 140) {
    haeder.style.backgroundColor = "var(--subcolor-balck)";
    haeder.style.height = "70px";
  } else if (window.scrollY <= 130 && myWidth > 767) {
    haeder.style.backgroundColor = "transparent";
    haeder.style.height = "100px";
  }
};
window.onresize = WindowSize;
window.onload = WindowSize;
function WindowSize() {
  myWidth = window.innerWidth;
  if (myWidth < 767) {
    haeder.style.backgroundColor = "var(--subcolor-balck)";
    haeder.style.height = "70px";
  } else {
    haeder.style.backgroundColor = "transparent";
    haeder.style.height = "100px";
  }
}
let burger = document.getElementById("burger");
let headcontain = document.getElementById("headcontain");
let closeburger = document.getElementById("closeburger");
let clickscount = 0;
burger.addEventListener("click", function () {
  if (clickscount % 2 == 0) {
    headcontain.classList.add("menu-active");
    clickscount++;
  } else {
    headcontain.classList.remove("menu-active");
    clickscount++;
  }
});

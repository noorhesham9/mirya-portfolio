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
let navformoplinks = document.getElementById("navformoplinks");
let navformop = document.getElementById("navformop");
burger.addEventListener("click", function () {
  if (clickscount % 2 == 0) {
    headcontain.classList.add("menu-active");
    navformoplinks.style.left = "0px";
    navformop.style.visibility = "visible";
    clickscount++;
  } else {
    headcontain.classList.remove("menu-active");
    navformoplinks.style.left = "-300px";
    navformop.style.visibility = "hidden";

    clickscount++;
  }
});

let showsub = document.getElementById("showsub");
// navformoplinks
// <!-- enablesubBlog -->
// <!-- disablesubBLog -->
let clickscount2 = 0;
showsub.addEventListener("click", function () {
  if (clickscount2 % 2 == 0) {
    navformoplinks.classList.add("enablesubBlog");
    navformoplinks.classList.remove("disablesubBLog");

    clickscount2++;
  } else {
    navformoplinks.classList.remove("enablesubBlog");
    navformoplinks.classList.add("disablesubBLog");

    clickscount2++;
  }
});

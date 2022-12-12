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

let changedTiltle = document.querySelector(".changedTiltle");
let time = 40;
let word, i;

function add_ui_ux(word) {
  word = "Ui/ Ux designer.";
  i = 0;

  var typeWriter = setInterval(function () {
    changedTiltle.textContent += word[i];
    i++;
    if (i > word.length - 1) {
      clearInterval(typeWriter);
    }
  }, time);
}
function add_web_d(word) {
  word = "Web developer.";
  i = 0;

  var typeWriter = setInterval(function () {
    changedTiltle.textContent += word[i];
    i++;
    if (i > word.length - 1) {
      clearInterval(typeWriter);
    }
  }, time);
}
function add_web_des(word) {
  word = "Web designer.";
  i = 0;

  var typeWriter = setInterval(function () {
    changedTiltle.textContent += word[i];
    i++;
    if (i > word.length - 1) {
      clearInterval(typeWriter);
    }
  }, time);
}

function remove() {
  word = changedTiltle.textContent;
  i = 0;
  changedTiltle.textContent = word;
  let nnn = changedTiltle.textContent.split("");

  let typeWriter = setInterval(function () {
    nnn.pop();

    changedTiltle.textContent = nnn.join("");
    i++;
    if (i > word.length - 1) {
      clearInterval(typeWriter);
    }
  }, time);
}
function repeat() {
  add_ui_ux();
  setTimeout(remove, 1500);
  setTimeout(add_web_d, 3000);
  setTimeout(remove, 4500);
  setTimeout(add_web_des, 6000);
  setTimeout(remove, 7500);
}
repeat();
setInterval(repeat, 9000);

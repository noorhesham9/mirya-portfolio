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

// let first_word = [
//   "W",
//   "e",
//   "b",
//   "",
//   "D",
//   "w",
//   "v",
//   "e",
//   "l",
//   "o",
//   "p",
//   "e",
//   "r",
// ];
// console.log(first_word[2]);
let changedTiltle = document.querySelector(".changedTiltle");
let time = 40;

let array_of_word1 = [];
function wep_developer() {
  setTimeout(() => {
    array_of_word1.push("W");
    changedTiltle.innerHTML = array_of_word1.join("");
    setTimeout(() => {
      array_of_word1.push("e");
      changedTiltle.innerHTML = array_of_word1.join("");
      setTimeout(() => {
        array_of_word1.push("p");
        changedTiltle.innerHTML = array_of_word1.join("");
        setTimeout(() => {
          array_of_word1.push(" ");
          changedTiltle.innerHTML = array_of_word1.join("");
          setTimeout(() => {
            array_of_word1.push("D");
            changedTiltle.innerHTML = array_of_word1.join("");
            setTimeout(() => {
              array_of_word1.push("e");
              changedTiltle.innerHTML = array_of_word1.join("");
              setTimeout(() => {
                array_of_word1.push("v");
                changedTiltle.innerHTML = array_of_word1.join("");
                setTimeout(() => {
                  array_of_word1.push("e");
                  changedTiltle.innerHTML = array_of_word1.join("");
                  setTimeout(() => {
                    array_of_word1.push("l");
                    changedTiltle.innerHTML = array_of_word1.join("");
                    setTimeout(() => {
                      array_of_word1.push("o");
                      changedTiltle.innerHTML = array_of_word1.join("");
                      setTimeout(() => {
                        array_of_word1.push("p");
                        changedTiltle.innerHTML = array_of_word1.join("");
                        setTimeout(() => {
                          array_of_word1.push("e");
                          changedTiltle.innerHTML = array_of_word1.join("");
                          setTimeout(() => {
                            array_of_word1.push("r");
                            changedTiltle.innerHTML = array_of_word1.join("");

                            //remove the word*****************************

                            setTimeout(() => {
                              array_of_word1.pop();
                              changedTiltle.innerHTML = array_of_word1.join("");
                              setTimeout(() => {
                                array_of_word1.pop();
                                changedTiltle.innerHTML =
                                  array_of_word1.join("");
                                setTimeout(() => {
                                  array_of_word1.pop();
                                  changedTiltle.innerHTML =
                                    array_of_word1.join("");
                                  setTimeout(() => {
                                    array_of_word1.pop();
                                    changedTiltle.innerHTML =
                                      array_of_word1.join("");
                                    setTimeout(() => {
                                      array_of_word1.pop();
                                      changedTiltle.innerHTML =
                                        array_of_word1.join("");
                                      setTimeout(() => {
                                        array_of_word1.pop();
                                        changedTiltle.innerHTML =
                                          array_of_word1.join("");
                                        setTimeout(() => {
                                          array_of_word1.pop();
                                          changedTiltle.innerHTML =
                                            array_of_word1.join("");
                                          setTimeout(() => {
                                            array_of_word1.pop();
                                            changedTiltle.innerHTML =
                                              array_of_word1.join("");
                                            setTimeout(() => {
                                              array_of_word1.pop();
                                              changedTiltle.innerHTML =
                                                array_of_word1.join("");
                                              setTimeout(() => {
                                                array_of_word1.pop();
                                                changedTiltle.innerHTML =
                                                  array_of_word1.join("");
                                                setTimeout(() => {
                                                  array_of_word1.pop();
                                                  changedTiltle.innerHTML =
                                                    array_of_word1.join("");
                                                  setTimeout(() => {
                                                    array_of_word1.pop();
                                                    changedTiltle.innerHTML =
                                                      array_of_word1.join("");
                                                    setTimeout(() => {
                                                      array_of_word1.pop();
                                                      changedTiltle.innerHTML =
                                                        array_of_word1.join("");
                                                    }, time);
                                                  }, time);
                                                }, time);
                                              }, time);
                                            }, time);
                                          }, time);
                                        }, time);
                                      }, time);
                                    }, time);
                                  }, time);
                                }, time);
                              }, time);
                            }, 700);
                          }, time);
                        }, time);
                      }, time);
                    }, time);
                  }, time);
                }, time);
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
    }, time);
  }, time);
}
function wep_designer() {
  setTimeout(() => {
    array_of_word1.push("W");
    changedTiltle.innerHTML = array_of_word1.join("");
    setTimeout(() => {
      array_of_word1.push("e");
      changedTiltle.innerHTML = array_of_word1.join("");
      setTimeout(() => {
        array_of_word1.push("p");
        changedTiltle.innerHTML = array_of_word1.join("");
        setTimeout(() => {
          array_of_word1.push(" ");
          changedTiltle.innerHTML = array_of_word1.join("");
          setTimeout(() => {
            array_of_word1.push("D");
            changedTiltle.innerHTML = array_of_word1.join("");
            setTimeout(() => {
              array_of_word1.push("e");
              changedTiltle.innerHTML = array_of_word1.join("");
            }, time);
            setTimeout(() => {
              array_of_word1.push("s");
              changedTiltle.innerHTML = array_of_word1.join("");
              setTimeout(() => {
                array_of_word1.push("i");
                changedTiltle.innerHTML = array_of_word1.join("");
                setTimeout(() => {
                  array_of_word1.push("g");
                  changedTiltle.innerHTML = array_of_word1.join("");
                  setTimeout(() => {
                    array_of_word1.push("n");
                    changedTiltle.innerHTML = array_of_word1.join("");
                    setTimeout(() => {
                      array_of_word1.push("e");
                      changedTiltle.innerHTML = array_of_word1.join("");
                      setTimeout(() => {
                        array_of_word1.push("r");
                        changedTiltle.innerHTML = array_of_word1.join("");

                        //remove the word*****************************

                        setTimeout(() => {
                          array_of_word1.pop();
                          changedTiltle.innerHTML = array_of_word1.join("");
                          setTimeout(() => {
                            array_of_word1.pop();
                            changedTiltle.innerHTML = array_of_word1.join("");
                            setTimeout(() => {
                              array_of_word1.pop();
                              changedTiltle.innerHTML = array_of_word1.join("");
                              setTimeout(() => {
                                array_of_word1.pop();
                                changedTiltle.innerHTML =
                                  array_of_word1.join("");
                                setTimeout(() => {
                                  array_of_word1.pop();
                                  changedTiltle.innerHTML =
                                    array_of_word1.join("");
                                  setTimeout(() => {
                                    array_of_word1.pop();
                                    changedTiltle.innerHTML =
                                      array_of_word1.join("");
                                    setTimeout(() => {
                                      array_of_word1.pop();
                                      changedTiltle.innerHTML =
                                        array_of_word1.join("");
                                      setTimeout(() => {
                                        array_of_word1.pop();
                                        changedTiltle.innerHTML =
                                          array_of_word1.join("");
                                        setTimeout(() => {
                                          array_of_word1.pop();
                                          changedTiltle.innerHTML =
                                            array_of_word1.join("");
                                          setTimeout(() => {
                                            array_of_word1.pop();
                                            changedTiltle.innerHTML =
                                              array_of_word1.join("");
                                            setTimeout(() => {
                                              array_of_word1.pop();
                                              changedTiltle.innerHTML =
                                                array_of_word1.join("");
                                              setTimeout(() => {
                                                array_of_word1.pop();
                                                changedTiltle.innerHTML =
                                                  array_of_word1.join("");
                                                setTimeout(() => {
                                                  array_of_word1.pop();
                                                  changedTiltle.innerHTML =
                                                    array_of_word1.join("");
                                                }, time);
                                              }, time);
                                            }, time);
                                          }, time);
                                        }, time);
                                      }, time);
                                    }, time);
                                  }, time);
                                }, time);
                              }, time);
                            }, time);
                          }, time);
                        }, 700);
                      }, time);
                    }, time);
                  }, time);
                }, time);
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
    }, time);
  }, time);
}

function uiux() {
  setTimeout(() => {
    array_of_word1.push("U");
    changedTiltle.innerHTML = array_of_word1.join("");
    setTimeout(() => {
      array_of_word1.push("i");
      changedTiltle.innerHTML = array_of_word1.join("");
      setTimeout(() => {
        array_of_word1.push("/");
        changedTiltle.innerHTML = array_of_word1.join("");
        setTimeout(() => {
          array_of_word1.push(" ");
          changedTiltle.innerHTML = array_of_word1.join("");
          setTimeout(() => {
            array_of_word1.push("U");
            changedTiltle.innerHTML = array_of_word1.join("");
            setTimeout(() => {
              array_of_word1.push("x");
              changedTiltle.innerHTML = array_of_word1.join("");
              setTimeout(() => {
                array_of_word1.push(" ");
                changedTiltle.innerHTML = array_of_word1.join("");
              }, time);
              setTimeout(() => {
                array_of_word1.push("D");
                changedTiltle.innerHTML = array_of_word1.join("");
                setTimeout(() => {
                  array_of_word1.push("e");
                  changedTiltle.innerHTML = array_of_word1.join("");
                  setTimeout(() => {
                    array_of_word1.push("s");
                    changedTiltle.innerHTML = array_of_word1.join("");
                    setTimeout(() => {
                      array_of_word1.push("i");
                      changedTiltle.innerHTML = array_of_word1.join("");
                      setTimeout(() => {
                        array_of_word1.push("g");
                        changedTiltle.innerHTML = array_of_word1.join("");
                        setTimeout(() => {
                          array_of_word1.push("n");
                          changedTiltle.innerHTML = array_of_word1.join("");
                          setTimeout(() => {
                            array_of_word1.push("e");
                            changedTiltle.innerHTML = array_of_word1.join("");
                            setTimeout(() => {
                              array_of_word1.push("r");
                              changedTiltle.innerHTML = array_of_word1.join("");
                              //remove the word ***********************
                              setTimeout(() => {
                                array_of_word1.pop();
                                changedTiltle.innerHTML =
                                  array_of_word1.join("");
                                setTimeout(() => {
                                  array_of_word1.pop();
                                  changedTiltle.innerHTML =
                                    array_of_word1.join("");
                                  setTimeout(() => {
                                    array_of_word1.pop();
                                    changedTiltle.innerHTML =
                                      array_of_word1.join("");
                                    setTimeout(() => {
                                      array_of_word1.pop();
                                      changedTiltle.innerHTML =
                                        array_of_word1.join("");
                                      setTimeout(() => {
                                        array_of_word1.pop();
                                        changedTiltle.innerHTML =
                                          array_of_word1.join("");
                                        setTimeout(() => {
                                          array_of_word1.pop();
                                          changedTiltle.innerHTML =
                                            array_of_word1.join("");
                                          setTimeout(() => {
                                            array_of_word1.pop();
                                            changedTiltle.innerHTML =
                                              array_of_word1.join("");
                                            setTimeout(() => {
                                              array_of_word1.pop();
                                              changedTiltle.innerHTML =
                                                array_of_word1.join("");
                                              setTimeout(() => {
                                                array_of_word1.pop();
                                                changedTiltle.innerHTML =
                                                  array_of_word1.join("");
                                                setTimeout(() => {
                                                  array_of_word1.pop();
                                                  changedTiltle.innerHTML =
                                                    array_of_word1.join("");
                                                  setTimeout(() => {
                                                    array_of_word1.pop();
                                                    changedTiltle.innerHTML =
                                                      array_of_word1.join("");
                                                    setTimeout(() => {
                                                      array_of_word1.pop();
                                                      changedTiltle.innerHTML =
                                                        array_of_word1.join("");
                                                      setTimeout(() => {
                                                        array_of_word1.pop();
                                                        changedTiltle.innerHTML =
                                                          array_of_word1.join(
                                                            ""
                                                          );
                                                        setTimeout(() => {
                                                          array_of_word1.pop();
                                                          changedTiltle.innerHTML =
                                                            array_of_word1.join(
                                                              ""
                                                            );
                                                          setTimeout(() => {
                                                            array_of_word1.pop();
                                                            changedTiltle.innerHTML =
                                                              array_of_word1.join(
                                                                ""
                                                              );
                                                          }, time);
                                                        }, time);
                                                      }, time);
                                                    }, time);
                                                  }, time);
                                                }, time);
                                              }, time);
                                            }, time);
                                          }, time);
                                        }, time);
                                      }, time);
                                    }, time);
                                  }, time);
                                }, time);
                              }, 700);
                            }, time);
                          }, time);
                        }, time);
                      }, time);
                    }, time);
                  }, time);
                }, time);
              }, time);
            }, time);
          }, time);
        }, time);
      }, time);
    }, time);
  }, time);
}
wep_developer();
setTimeout(wep_designer, 2200);
setTimeout(uiux, 4400);

setInterval(() => {
  setTimeout(wep_developer, 0);
  setTimeout(wep_designer, 2200);
  setTimeout(uiux, 4400);
}, 6600);
// wep_developer();
// wep_designer();
// uiux();

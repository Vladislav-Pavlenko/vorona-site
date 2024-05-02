const moreBtnEl = document.querySelector(".header-item-link-js");
const menuEl = document.querySelector(".header-menu");
const openBtnEl = document.querySelector(".header-button");
const closeBtnEl = document.querySelector(".close-btn");
const mobMenuEl = document.querySelector(".header-mob");

moreBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (menuEl.style.display === "flex") {
    menuEl.style = "display: none";
  } else {
    menuEl.style = "display: flex";
  }
});

openBtnEl.addEventListener("click", (event) => {
  if (mobMenuEl.style.display === "flex") {
    mobMenuEl.style = "display: none";
    document.body.style = "overflow: auto";
  } else {
    mobMenuEl.style = "display: flex";
    document.body.style = "overflow: hidden";
  }
});

closeBtnEl.addEventListener("click", (event) => {
  if (mobMenuEl.style.display === "flex") {
    mobMenuEl.style = "display: none";
    document.body.style = "overflow: auto";
  } else {
    mobMenuEl.style = "display: flex";
    document.body.style = "overflow: hidden";
  }
});

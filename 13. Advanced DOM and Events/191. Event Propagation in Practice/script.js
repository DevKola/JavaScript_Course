"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Implementing Smooth Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  // get the coordinate of where you want to scroll to
  const s1coord = section1.getBoundingClientRect();

  /*
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  */

  // Implementing the scroll
  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // the best (old) way with smooth behaviour
  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: "smooth"
  // });

  // Modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

//Generating Random Colors
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()

  // Event target: this is the place the event first originated, first happen. this is not the element the event is attached
  console.log(`Link`, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation:
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()
   console.log(`Link`, e.target, e.currentTarget);
});

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor()
   console.log(`Link`, e.target, e.currentTarget);
});

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

// DOM lifecycle Events : this means right from the moment a user access it till/she leaves it

// DOM Content Loaded : this happens as soon as the HTML is completely parsed, this means all HTML as been downloaded abd converted to the DOM tree, also all scripts be be executed before the DOM content loaded can happen
document.addEventListener("DOMContentLoaded", function (e) {});

// The load Event: this is fired by the window as soon as not only the HTML is parsed, but also the images and external resources like CSS files are also loaded. When the complete page is done loading is when this event is fired
window.addEventListener("load", function (e) {});

// The before unload event : this event is created immediately, before a user is about to leave the page. After clicking the close button in the browser tab. We can use this event to ask user if they 100% want to leave the page.in some browser, to make this Worker, we need to call preventDefault()
// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = ""; //this ask if you want to leave the page
// });

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

///////////// Styling, Attribute and Clases///////////////////

// Stles : styles set in the DOM are set as inline-style
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); //this will not be logged because it's not in the HTML DOM/ not an inline style
console.log(message.style.backgroundColor); //this will be logged because it's inline/defined by us

// getting element style properties that are not defined by us/not inline
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// Working with CSS custom properties/variables
document.documentElement.style.setProperty("--color-primary", "orangered"); //this will change the color in everywhere we use the color before changing it in JS. this allows us to change the color on our page

// Elements' Attrubutes :we can access and change them in JS
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Setting Attribute
logo.alt = "Beautiful minimalist logo";

// Getting Non-standard HTML attribute
console.log(logo.getAttribute("designer"));
console.log(logo.getAttribute("src"));

// creating an attribute and setting it
logo.setAttribute("company", "Bankist");

// getting relative and absolute attibutes of href
const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data Atrribute are a special king of atrribute that start with the word data
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j"); //more than one class
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c"); //not includes

// Don't use to set class
logo.className = "jonas";

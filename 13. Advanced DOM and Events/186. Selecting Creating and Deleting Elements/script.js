'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///////////// How to select, create and delete elements in JS/////////////

// Selecting Element
// Selecting the Entire element of a webpage
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Selecting individual element
const header = document.querySelector(".header");

// selecting multiple elements
const allSections = document.querySelectorAll(".section"); //this will return a node list/like array, containing all the elements with the name

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button"); //this returns an HTMLcollections which meansis diff from a node list because an HTMLcollection is called a live collection, meaning if the DOM changes, the collection will also change/update automatically

document.getElementsByClassName("btn"); //also returns live HTMLCollection

// Creating and Inserting elements:
// .insertAdjacentHTML;

const message = document.createElement("div"); //this returns a DOM and saves it in the message variable. this element is not saved on our DOM yet, all it does is creates one that we can then use.
message.classList.add("cookie-message");
message.textContent = "We use cookies for improve functionality and analytics.";
message.innerHTML = `We use cookies for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
//header.prepend(message); //.prepend adds the element as the first child
header.append(message); //adds as the last child of the last element

//moves multiple element at the same time :  to do that we need to copy the first element
// header.append(message.cloneNode(true));

//header.before(message); //adds the element before the header
//header.after(message); //adds the message after the element as a

// Removing element
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
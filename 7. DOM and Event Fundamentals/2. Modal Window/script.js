"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModals = document.querySelectorAll(".show-modal");

// Fuction open modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModals.length; i++)
  btnsOpenModals[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// keyboard events is just another type of event and also needs an even listener
// whenever an event handler is triggered, it generates an object about the event and we can have access to it. this can help us locate the kind of key that was pressed. to do this, we need to provide an argument to the function.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

/*
  // How the DOM really works: it's the interface between JS and the browser or HTML codes render in or out of the browser.


    1. Allows us to make JS interract with the browser
    2. We can write JS to create, modify and delete HTML elements; set style, classes and attributes; and listen and respond to events.
    3. DOM treen is generated from an HTML document, which we can then interact with
    4. DOM is a very complex API that contains alots og methods and properties to interact with the DOM 
    
  // in t DOM there are diff types of Nodes, some are HTML elements and some are just texts, and each of them is organized into diff types of DOM objects


  // How the DOM API is organized behind the scenes
    1. Every single DOM tree in the DOM is of the type node, each node is represented by Object, this objects then have access to node methods and properties. e.g .textContent, .childNodes, .parentNodes, .cloneNode() etc

    2. Node types has a couple of child types and they are: Element, Text, Comment and Document types. Whenever thers's a text inside HTML element, we know it gets it's own node and that node will be of the type text, the same also applies to the comment.

    3. For the element itself, there's is the element type of node. this type of de gives each HTML element access to a ton of useful properties such as : innerHTML, .classList, .children, .parentElement, .append(), .remove(), .insertAdjacentHTML(), .querySelector(), .closest(), .matches(), .scrollIntoView(), .setAttribute(). Each element will be represented internally as an 
      // the Element type has HTMLElement child type and that child itself has one type each for each HTML element that exists in HTML. We have a special type for: button, images, links and divs. this is important because each of the element can have unique properties. e.g the img element has a src attribute which no other element has, the href attribute for the acnchor tag which no other element has

  //the DOM needs a way of storing these attributes, so diff types of HTML attributes were created in the DOM API

  // What makes all the above explanations and attribute work is something called inheritance. What is an inheritance?
    // this means all the child types will have access to the methods and propeties of their parent node types. e.g any HTMLElement will have access to everything from the element type, like: innetHTML, classList and others. It will also have access to everything from the node type, because it is also it's parent type


  // The document Node type is juat another type of node, it contains methods such as: .querySelector(), .createElement(), .getElementById()


  // The DOM API needs a way to listen to all the events from the elements and we do this by calling the .addEventListener() on the element or the document. this is possible because there's a special node type called eventTarget, which is a parent of both the node type and window type
*/

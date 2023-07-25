"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

const nav = document.querySelector(".nav");

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

// Event Delegation: Implementing Page Navigation
// 1. Add event listener to commmon parent element
// 2. Determind what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Show Tabs

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard Clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tabs
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Menu fade animation

// refactoring our code
const handleOver = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    // creating a variable for the link
    const link = e.target;

    // selecting the siblings elements: we can go to the parent element and then selecting the children from there. Instead of moving manually, we can also search for the closest element that macthes the query
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// Doing event delegation using the parent elements of all the elements
nav.addEventListener("mouseover", function (e) {
  handleOver(e, 0.5);
});

// Opposite of mouse over
nav.addEventListener("mouseout", function (e) {
  handleOver(e, 1);
});

// passing "argument" into handler
// nav.addEventListener("mouseover", handleOver.bind(0.5));
// nav.addEventListener("mouseout", handleOver.bind(1));

// Implementing sticky navigation
// Using the scroll event: which is available on the window
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function (e) {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add("sticky")
//   else nav.classList.remove("sticky");
// });

// A better way to implement sticky navigation using the intersection Observer API. this API helps oberserve changes to way in which a certain target element intersects another element or the way it intsersects the viewport
// How intersection Observer API works

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {

//   });
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 1, 0.2]
// }

// const observer = new IntersectionObserver();

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Reveal Sections
const allSections = document.querySelectorAll(".section");

const revealSections = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  null: 0,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// Lazy Loading
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace the src attribute with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "+200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// Building a slider component: Part 1
const slider = function () {
  

  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let currenSlide = 0;
  const maxSlides = slides.length;

  // const slider = document.querySelector(".slider");
  // slider.style.transform = "scale(0.4) translateX(-800px)";
  // slider.style.overflow = "visible";

  // create dots
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };


  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
  
    document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add("dots__dot--active")
  };


  // slides.forEach((s, i) => {
  //   s.style.transform = `translateX(${100 * i}%)`;
  // });

  // Function
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };



  const nextSlide = function () {
    if (currenSlide === maxSlides - 1) {
      currenSlide = 0;
    } else {
      currenSlide++;
    }

    goToSlide(currenSlide);
    activateDot(currenSlide)
  };

  // Next slide
  // btnRight.addEventListener("click", function () {
  //   // if (currenSlide === maxSlides - 1) {
  //   //   currenSlide = 0;
  //   // } else {
  //   //   currenSlide++;
  //   // }

  //   //  slides.forEach((s, i) => {
  //   //    s.style.transform = `translateX(${100 * (i - currenSlide)}%)`;
  //   //  });
  //   // Refactoring
  //   // goToSlide(currenSlide);
  // });

  const prevSlide = function () {
    if (currenSlide === 0) {
      currenSlide = maxSlides - 1;
    } else {
      currenSlide--;
    }
    goToSlide(currenSlide);
    activateDot(currenSlide)
  };


  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  }
  init()

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // Arrow keyboard event
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  // Making the dots work
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide)
    }
  });
}

slider()

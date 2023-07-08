"use strict";

// selecting an element in JS:
// console.log(document.querySelector(".message").textContent);

// When javascript interact with a webpage, it is known as DOM. Document Object Model: Structured representation of HTML documents. Allows Javascript to access HTML Elements and style to manipulate them.

// Selecting and manipulating Elements:
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 25;

// document.querySelector(".guess").value = 19
// console.log(document.querySelector(".guess").value);

// Handling Click event : and event is something that happens on the page e.g a mouse clicking, a mouse moving, or keypress. we can trigger all these movement with an event listener, we can then wait for any of these moement to happen before reacting

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!";

    displayMessage("⛔ No number!");

    //When the player guessed right
  } else if (guess === secretNum) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNum ? "📈 Too High!" : "📉 Too Low!";
      displayMessage(guess > secretNum ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💣 You lost the game";
      displayMessage("💣 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // When the guess is too high
  // } else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💣 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // when the guess is too low
  // } else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💣 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
});

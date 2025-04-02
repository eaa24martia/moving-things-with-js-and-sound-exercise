"use strict";

const dodger = document.getElementById("dodger");


// Funktion, der flytter dodgeren til venstre
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Funktion, der flytter dodgeren til højre
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10); 

  if (left < 360) { 
    dodger.style.left = `${left + 1}px`; 
  }
}

// Listener, der tjekker for om der bliver trykket venstre eller højre
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight(); 
  }
});
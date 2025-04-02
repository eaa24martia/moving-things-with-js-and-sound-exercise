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

// Funktion, der flytter dodgeren op
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
    }
}

// Funktion, der flytter dodgeren ned
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
    }
}



// Listener, der tjekker for om der bliver trykket venstre eller højre
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } 
  
  if (e.key === "ArrowRight") {
    moveDodgerRight(); 
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp(); 
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown(); 
  }
});
"use strict";

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");
const gameOverSound = document.getElementById("gameOverSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}

function playGameOverSound() {
    gameOverSound.currentTime = 0;
    gameOverSound.play();
}

// Funktion der flytter dodger til venstre
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        playSoundOnMovement();
    } else {
        playGameOverSound(); // Play game over sound when hitting the left edge
    }
}

// Funktion der fytter dodger til højre
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
        playSoundOnMovement();
    } else {
        playGameOverSound(); // Play game over sound when hitting the right edge
    }
}

// Funktion til at flytte dodger op
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
        playSoundOnMovement();
    } else {
        playGameOverSound(); // Play game over sound when hitting the top edge
    }
}

// Function to move dodger down
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
        playSoundOnMovement();
    } else {
        playGameOverSound(); // Play game over sound when hitting the bottom edge
    }
}

// Event listener for keydown events
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
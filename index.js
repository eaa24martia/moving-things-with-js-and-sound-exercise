"use strict";

const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}

// Function to move dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        playSoundOnMovement(); // Play sound on movement
    }
}

// Function to move dodger right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
        playSoundOnMovement(); // Play sound on movement
    }
}

// Function to move dodger up
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom < 380) {
        dodger.style.bottom = `${bottom + 1}px`;
        playSoundOnMovement(); // Play sound on movement
    }
}

// Function to move dodger down
function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 1}px`;
        playSoundOnMovement(); // Play sound on movement
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
const popupDiv1 = document.querySelector(".popup.spel1");
const popupDiv2 = document.querySelector(".popup.spel2");
const flexContainer = document.querySelector(".home .flex-container");
const gameDiv1 = document.querySelector(".popup.spel1 .popup-content");
const gameDiv2 = document.querySelector(".popup.spel2 .popup-content");
const speluitlegDiv1 = document.querySelector(".popup.spel1 .speluitleg");
const speluitlegDiv2 = document.querySelector(".popup.spel2 .speluitleg");

function openPopUp() {
    popupDiv1.style.display = "block";
    flexContainer.style.display = "none";
}

function openPopUp2() {
    popupDiv2.style.display = "block";
    flexContainer.style.display = "none";
}

function closePopUp() {
    popupDiv1.style.display = "none";
    popupDiv2.style.display = "none";
    flexContainer.style.display = "flex";
}

function startGame() {
    speluitlegDiv1.style.display = "none";
    gameDiv1.style.display = "block";
}

function startGame2() {
    speluitlegDiv2.style.display = "none";
    gameDiv2.style.display = "block";
}
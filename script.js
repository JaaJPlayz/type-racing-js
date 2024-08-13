const player = document.querySelector("#player");
const cpu = document.querySelector("#cpu");
const start = document.querySelector("#start"); // Start button
let gameStarted = false;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerMove() {
  const currentMargin = parseInt(getComputedStyle(player).marginLeft, 10);
  player.style.marginLeft = (currentMargin + getRandomIntInclusive(10, 40)) + "px";
  console.log("Player pos: " + currentMargin);
}

function cpuMove() {
  const currentMargin = parseInt(getComputedStyle(cpu).marginLeft, 10);
  cpu.style.marginLeft = (currentMargin + getRandomIntInclusive(10, 40)) + "px";
  console.log("CPU pos: " + currentMargin);
}

start.addEventListener("click", function () {
  if (!gameStarted) {
    gameStarted = true;
  }
});

window.addEventListener("keydown", function (event) {
  if (!gameStarted) {
    return;
  }
  if (event.key === "j") {
    playerMove();
  }
});

setInterval(function () {
  if (!gameStarted) {
    return;
  }
  cpuMove();
}, 1000);

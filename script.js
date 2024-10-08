const player = document.querySelector("#player");
const cpu = document.querySelector("#cpu");
const start = document.querySelector("#start"); // Start button
const reset = document.querySelector("#reset"); // Reset button
const road = document.querySelector("#cpu_road");
const quotes = document.querySelector("#quote_container");

let gameStarted = false;
let gameEnded = false;
let quote = "";

function getQuote() {
  fetch("quotes.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedQuote =
        data["randomQuotes"][
        Math.floor(Math.random() * data["randomQuotes"].length)
        ]["quotes"];
      quotes.innerHTML = `<p>${selectedQuote}</p>`;
      quote = selectedQuote;
    });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playerMove() {
  const currentMargin = parseInt(getComputedStyle(player).marginLeft, 10);
  player.style.marginLeft =
    currentMargin + getRandomIntInclusive(10, 40) + "px";
  console.log("Player pos: " + currentMargin);
}

function cpuMove() {
  const currentMargin = parseInt(getComputedStyle(cpu).marginLeft, 10);
  cpu.style.marginLeft = currentMargin + getRandomIntInclusive(10, 40) + "px";
  console.log("CPU pos: " + currentMargin);
}

function checkPlayerWin() {
  if (parseInt(getComputedStyle(player).marginLeft, 10) >= road.clientWidth) {
    console.log("Player won the game!");
    gameEnded = true;
  }
}

function checkCpuWin() {
  if (parseInt(getComputedStyle(cpu).marginLeft, 10) >= road.clientWidth) {
    console.log("CPU won the game!");
    gameEnded = true;
  }
}

function resetGame() {
  player.style.marginLeft = "20px";
  cpu.style.marginLeft = "20px";
  gameStarted = false;
  gameEnded = false;

  getQuote("quotes.json");
}

start.addEventListener("click", function() {
  if (!gameStarted) {
    gameStarted = true;
  }

  start.blur();

  getQuote("quotes.json");
});

reset.addEventListener("click", function() {
  resetGame();
  reset.blur();
});

window.addEventListener("keydown", function(event) {
  if (!gameStarted | gameEnded) {
    return;
  }

  if (checkPlayerWin() || checkCpuWin()) {
    return;
  }

  if (event.key === " ") {
    event.preventDefault();
  }
});

setInterval(function() {
  if (!gameStarted | gameEnded) {
    return;
  }

  if (checkPlayerWin() || checkCpuWin()) {
    return;
  }

  cpuMove();
}, 1000);

const player = document.querySelector("#player");
const cpu = document.querySelector("#cpu");

function playerMove() {
  // Parse the current left margin value and add 10 pixels
  const currentMargin = parseInt(getComputedStyle(player).marginLeft, 10);
  player.style.marginLeft = (currentMargin + 100) + "px";
  console.log("Player pos: " + currentMargin);
}

function cpuMove() {
  // Parse the current left margin value and subtract 10 pixels
  const currentMargin = parseInt(getComputedStyle(cpu).marginLeft, 10);
  cpu.style.marginLeft = (currentMargin + 100) + "px";
  console.log("CPU pos: " + currentMargin);
}

window.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    playerMove();
  }
  if (event.key === "k") {
    cpuMove();
  }
});

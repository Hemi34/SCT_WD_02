let startTime, elapsedTime = 0, interval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
  let date = new Date(time);
  return date.toISOString().substr(11, 12);
}

function updateDisplay() {
  display.textContent = timeToString(elapsedTime);
}

function startStopwatch() {
  if (!interval) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

function resetStopwatch() {
  pauseStopwatch();
  elapsedTime = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function recordLap() {
  if (interval) {
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${laps.children.length + 1}: ${timeToString(elapsedTime)}`;
    laps.appendChild(lapItem);
  }
}

let [defaultMilisec, defaultSec, defaultMinute, defaultHour] = [0, 0, 0, 0];
// Timer container
const setTimerContainer = document.querySelector(".setTimerContainer");
// Input value from user
const inputHour = document.getElementById("inputHour");
const inputMinute = document.getElementById("inputMinute");
const inputSecond = document.getElementById("inputSecond");
const inputMilisec = document.getElementById("inputMilisec");
// Display vale
const displayHours = document.getElementById("displayHours");
const displayMinutes = document.getElementById("displayMinutes");
const displaySeconds = document.getElementById("displaySeconds");
const displayMiliseconds = document.getElementById("displayMiliseconds");
// Start and stop button
const startStopval = document.getElementById("startStopval");

const closeTimerContainer = () => {
  setTimerContainer.classList.add("displayNone");
  if (
    inputHour.value.length <= 0 ||
    inputHour.value.length > 2 ||
    inputHour.value[0] === "-" ||
    inputMinute.value.length <= 0 ||
    inputMinute.value.length > 2 ||
    inputMinute.value[0] === "-" ||
    inputSecond.value.length <= 0 ||
    inputSecond.value.length > 2 ||
    inputSecond.value[0] === "-" ||
    inputMilisec.value.length <= 0 ||
    inputMilisec.value.length > 2 ||
    inputMilisec.value[0] === "-"
  ) {
    return alert("Enter valid time");
  }
  displayHours.innerHTML = inputHour.value;
  displayMinutes.innerHTML = inputMinute.value;
  displaySeconds.innerHTML = inputSecond.value;
  displayMiliseconds.innerHTML = inputMilisec.value;

  defaultMilisec = Number(inputMilisec.value);
  defaultSec = Number(inputMilisec.value);
  defaultMinute = Number(inputMilisec.value);
  defaultHour = Number(inputMilisec.value);
};
const openTimerContainer = () => {
  setTimerContainer.classList.remove("displayNone");
};
// Initial value null and after click the start button the value will be setInterval
let miliSec = null;
let sec = null;
let minute = null;
let hour = null;
let timeOut = 0;
const toggle = () => {
  if (startStopval.innerHTML === "Start") {
    startStopval.innerHTML = "Stop";
    miliSec = setInterval(miliSceFunc, 10);
    sec = setInterval(secFunc, 1000);
    minute = setInterval(minuteFunc, 60000);
    hour = setInterval(hourFunc, 3600000);
    timeOut =
      inputHour.value * 3600000 +
      inputMinute * 60000 +
      inputSecond * 100 +
      inputMilisec * 10;
  } else {
    clearInterval(miliSec);
    clearInterval(sec);
    clearInterval(minute);
    clearInterval(hour);
    startStopval.innerHTML = "Start";
  }
};

setTimeout(() => {
  clearInterval(miliSec);
  clearInterval(sec);
  clearInterval(minute);
  clearInterval(hour);
  startStopval.innerHTML = "Start";
}, inputHour.value * 3600000 + inputMinute * 60000 + inputSecond * 100 + inputMilisec * 10);

function miliSceFunc() {
  if (defaultMilisec === 0) {
    defaultMilisec = 100;
  }
  defaultMilisec--;
  displayMiliseconds.innerHTML = defaultMilisec;
}

function secFunc() {
  if (defaultSec === 0) {
    defaultSec = 60;
    defaultMinute = defaultMinute - 1;
  }
  defaultSec--;
  displaySeconds.innerHTML = defaultSec;
}

function minuteFunc() {
  if (defaultMinute === 0) {
    defaultMilisec = 60;
  }
  defaultMinute--;
  displayMinutes.innerHTML = defaultMinute;
}

function hourFunc() {
  defaultHour--;
  displayHours.innerHTML = defaultHour;
}

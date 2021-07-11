// import '../css/color-switcher.css';

const refs = {
    body: document.body,
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};

const INTERVAL_DELAY = 1000;
let timerId;

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
     refs.body.style.backgroundColor = getRandomHexColor();
    
}

function onBtnStart() {
    refs.btnStart.disabled = true;
    return (timerId = setInterval(changeColor, INTERVAL_DELAY));
}

function onBtnStop() {
    clearInterval(timerId);
    timerId = 0;
    refs.btnStart.disabled = false;
}

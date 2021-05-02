const morningBackground = ['img/morning/01.jpg', 'img/morning/02.jpg', 'img/morning/03.jpg',
                       'img/morning/04.jpg', 'img/morning/05.jpg', 'img/morning/06.jpg'];

const dayBackground = ['img/day/01.jpg', 'img/day/02.jpg', 'img/day/03.jpg',
                      'img/day/04.jpg', 'img/day/05.jpg', 'img/day/06.jpg'];

const eveningBackground = ['img/evening/01.jpg', 'img/evening/02.jpg', 'img/evening/03.jpg',
                      'img/evening/04.jpg', 'img/evening/05.jpg', 'img/evening/06.jpg'];

const nightBackground = ['img/night/01.jpg', 'img/night/02.jpg', 'img/night/03.jpg',
                      'img/night/04.jpg', 'img/night/05.jpg', 'img/night/06.jpg'];

const mass = nightBackground.concat(morningBackground, dayBackground, eveningBackground);
var interval = 60 * 60 * 1000;

// DOM Elements
const time = document.querySelector('.time'),
  date = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  button = document.querySelector('.btn'),
  focus = document.querySelector('.focus');

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // 24hr Format
  hour = hour % 24;

  // Output Time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

//Show Date
function showDate() {
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let todayDate = new Date(),
    year = todayDate.getFullYear(),
    month = todayDate.getMonth() + 1,
    day = todayDate.getDate(),
    dayName = days[todayDate.getDay()];

  date.innerHTML = `${dayName}<span>, </span>${addZero(day)}<span>-</span>${addZero(month)}<span>-</span>${year}`;

  setTimeout(showDate, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showNextImage(currentImage) {
    document.body.style.backgroundImage = 'url(' + mass[currentImage] + ')';
    setTimeout(showNextImage, interval);
  }

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    // Morning
    showNextImage(hour);
    greeting.textContent = 'Good morning, ';
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    showNextImage(hour);
    greeting.textContent = 'Good afternoon, ';
  } else if (hour >= 18 && hour < 24){
    // Evening
    showNextImage(hour);
    greeting.textContent = 'Good evening, ';
  } else {
    // Night
    showNextImage(hour);
    greeting.textContent = 'Good night, ';
  }
  setTimeout(setBgGreet, interval);
}

function changeBG() {
  let today = new Date(),
    hour = today.getHours();
  var i = 1;
  var index = 0;
  button.addEventListener("click", function(){
      if (hour + i < 24) {
        document.body.style.backgroundImage = 'url(' + mass[hour + i] + ')';
        i++;
      } else {
        if (index <= hour){
          document.body.style.backgroundImage = 'url(' + mass[index] + ')';
          index++;
        }
      }
    })
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
showDate();
setBgGreet();
changeBG();
getName();
getFocus();
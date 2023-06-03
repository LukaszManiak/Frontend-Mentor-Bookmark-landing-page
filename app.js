'use strict';
console.log('js is working');

//elements
const faqContainer = document.querySelector('.faq-container');
const answerBox = document.querySelector('.answer');
const featuresBtnContainer = document.querySelector('.select-btns-container');
const featuresSlider = document.querySelector('.features-slider');
const featuresContainers = document.querySelectorAll('.features-container');
const featuresBtns = document.querySelectorAll('.feature-btn');
const arrowPaths = document.querySelectorAll('.path');
const answers = document.querySelectorAll('.answer');
const navBtn = document.querySelector('.nav-btn');
const navMenuBackground = document.querySelector('.nav-bg');
const navImg = document.querySelector('.nav-img');
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.nav-bookmark-logo');
const navWhiteLogo = document.querySelector('.nav-bookmark-white-logo');
const navCloseImg = document.querySelector('.nav-close-img');
const input = document.querySelector('.input');
const form = document.querySelector('.input-form');
const alertIcon = document.querySelector('.alert-icon');
const alertBar = document.querySelector('.alert-bar');
const alertP = document.querySelector('.alert-p');
const alertBtn = document.querySelector('.inputBtn');

faqContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const question = e.target;
  const questionNumber = question.dataset.question;
  if (!questionNumber) return;

  //hiding all answers
  answers.forEach(a => {
    if (!a.classList.contains('hidden')) {
      //arrow animation
      const arrowNum = a.dataset.answer;
      const arrowIcon = document.querySelector(
        `[data-question-arrow="${arrowNum}"]`
      );
      arrowIcon.classList.remove('arrow-spin');
      arrowIcon.classList.add('arrow-spin-2');

      //hiding answer
      a.classList.add('hidden');
    }
  });

  //changing arrow colors red/blue
  arrowPaths.forEach(path => {
    if (path.dataset.path == questionNumber) {
      path.style.stroke = 'hsl(0, 94%, 66%)';
    } else {
      path.style.stroke = '#5267DF';
    }
  });

  // showing selected answer
  const answer = document.querySelector(`[data-answer="${questionNumber}"]`);
  const answerArrow = document.querySelector(
    `[data-question-arrow="${questionNumber}"]`
  );
  answer.classList.remove('hidden');
  answerArrow.classList.remove('arrow-spin-2');
  answerArrow.classList.add('arrow-spin');
});

featuresBtnContainer.addEventListener('click', function (e) {
  e.preventDefault();

  //selecting feature container
  const feature = e.target;
  const featureNumber = feature.dataset.feature;
  if (!featureNumber) return;

  featuresBtns.forEach(button => {
    if (button.dataset.feature == featureNumber) {
      button.classList.add('red-color');
    } else {
      button.classList.remove('red-color');
    }
  });

  //remove and add hidden class to features containers
  featuresContainers.forEach(f => {
    if (f.dataset.featurecontainer == featureNumber) {
      f.classList.remove('hidden');
    } else {
      f.classList.add('hidden');
    }
  });
});

//mobile navbar

//showing menu by clicking nav button
navBtn.addEventListener('click', function () {
  navMenuBackground.classList.toggle('hidden');
  navBtn.classList.toggle('blue-background');
  navLinks.classList.toggle('show');
  navElementsStyles();
});

//menu icon

let isOpen = false;
navWhiteLogo.classList.add('hidden');
navCloseImg.classList.add('hidden');

const navElementsStyles = function () {
  //changing navBtn and bookmark logo when button is activated
  if (!isOpen) {
    navLogo.classList.add('hidden');
    navImg.classList.add('hidden');
    navWhiteLogo.classList.remove('hidden');
    navCloseImg.classList.remove('hidden');
  } else {
    navLogo.classList.remove('hidden');
    navImg.classList.remove('hidden');
    navWhiteLogo.classList.add('hidden');
    navCloseImg.classList.add('hidden');
  }
  isOpen = !isOpen;
};

//setting appropriate bookmark logo depending of the screen size
window.addEventListener('resize', function () {
  if (isOpen == true && window.innerWidth >= 1100) {
    navLogo.classList.remove('hidden');
    navWhiteLogo.classList.add('hidden');
  }
  if (isOpen == true && window.innerWidth <= 1100) {
    navLogo.classList.add('hidden');
    navWhiteLogo.classList.remove('hidden');
  }
});

//input checking
const checkInput = function (e) {
  e.preventDefault();
  let inputVal = input.value;
  const valid = /\S+@\S+\.\S+/;
  //empty input

  if (!inputVal) {
    alertP.innerText = 'Whoops! It looks like you forgot to add your email.';
    setInputStyles(true);
    //wrong email adress
  } else if (!valid.test(inputVal)) {
    alertP.innerText = 'Please provide a valid email address!';
    setInputStyles(true);
  } else {
    //correct adress

    alertP.innerText = 'Thank you for your email adress!';
    setInputStyles(false);
  }
};

//setting input styles
const setInputStyles = function (isWrong) {
  if (isWrong) {
    alertBar.style.backgroundColor = 'hsl(0, 94%, 66%)';
    alertIcon.style.backgroundColor = 'hsl(0, 94%, 66%)';
    alertIcon.innerText = '!';
    alertBtn.style.marginTop = '25px';
  }
  if (!isWrong) {
    alertIcon.innerText = '✔';
    alertIcon.style.backgroundColor = 'hsl(229, 31%, 21%)';

    alertBar.style.backgroundColor = 'hsl(229, 31%, 21%)';
    alertBtn.style.marginTop = '25px';
  }
  alertBar.classList.remove('alert');
  alertIcon.classList.remove('alert');
};

alertBtn.addEventListener('click', checkInput);
form.addEventListener('submit', checkInput);

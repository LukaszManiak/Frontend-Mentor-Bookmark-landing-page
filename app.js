'use strict';
console.log('js is working');

const faqContainer = document.querySelector('.faq-container');
const answerBox = document.querySelector('.answer');
const featuresBtnContainer = document.querySelector('.select-btns-container');
const featuresSlider = document.querySelector('.features-slider');
const featuresContainers = document.querySelectorAll('.features-container');
const answers = document.querySelectorAll('.answer');
const navBtn = document.querySelector('.nav-btn');
const navMenuBackground = document.querySelector('.nav-bg');
const navImg = document.querySelector('.nav-img');
const navLinks = document.querySelector('.nav-links');
const navLogo = document.querySelector('.nav-bookmark-logo');

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
  navElementsStyling();
});

//menu icon

let isOpen = false;

const navElementsStyling = function () {
  //changing navBtn
  !isOpen
    ? (navImg.src = 'images/icon-close.svg')
    : (navImg.src = 'images/icon-hamburger.svg');

  //changing bookmark logo
  !isOpen
    ? (navLogo.src = 'images/logo-bookmark-white.svg')
    : (navLogo.src = 'images/logo-bookmark.svg');
  isOpen = !isOpen;
};

//setting appropriate bookmark logo
window.addEventListener('resize', function () {
  if (isOpen == true && window.innerWidth >= 1100) {
    navLogo.src = 'images/logo-bookmark.svg';
  }
  if (isOpen == true && window.innerWidth <= 1100) {
    navLogo.src = 'images/logo-bookmark-white.svg';
  }
});

'use strict';

const faqContainer = document.querySelector('.faq-container');
const answerBox = document.querySelector('.answer');
const featuresBtnContainer = document.querySelector('.select-btns-container');
const featuresSlider = document.querySelector('.features-slider');
const featuresContainers = document.querySelectorAll('.features-container');
const answers = document.querySelectorAll('.answer');
const navBtn = document.querySelector('.nav-btn');
const navImg = document.querySelector('.nav-img');

faqContainer.addEventListener('click', function (e) {
  e.preventDefault();

  //showing answer
  const question = e.target;
  const questionNumber = question.dataset.question;
  if (!questionNumber) return;

  const answer = document.querySelector(`[data-answer="${questionNumber}"]`);

  answers.forEach(a => {
    if (!a.classList.contains('hidden')) {
      const arrowNum = a.dataset.answer;
      const arrowIcon = document.querySelector(
        `[data-question-arrow="${arrowNum}"]`
      );
      arrowIcon.classList.remove('arrow-spin');
      arrowIcon.classList.add('arrow-spin-2');

      a.classList.add('hidden');
    }
  });

  //arrow animation
  const answerArrow = document.querySelector(
    `[data-question-arrow="${questionNumber}"]`
  );
  answer.classList.remove('hidden');
  answerArrow.classList.remove('arrow-spin-2');
  answerArrow.classList.add('arrow-spin');
});

console.log('js is working');
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

let isOpen = false;
navBtn.addEventListener('click', function () {
  //changing navImg src (hamburger/close)
  !isOpen
    ? (navImg.src = 'images/icon-close.svg')
    : (navImg.src = 'images/icon-hamburger.svg');
  isOpen = !isOpen;
});

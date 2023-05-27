'use strict';

const faqContainer = document.querySelector('.faq-container');
const answerBox = document.querySelector('.answer');
const featuresBtnContainer = document.querySelector('.select-btns-container');
const featuresSlider = document.querySelector('.features-slider');
const featuresContainers = document.querySelectorAll('.features-container');
const navBtn = document.querySelector('.nav-btn');
const navImg = document.querySelector('.nav-img');
console.log(featuresContainers);
faqContainer.addEventListener('click', function (e) {
  e.preventDefault();

  //showing answer
  const question = e.target;
  const questionNumber = question.dataset.question;
  if (!questionNumber) return;

  const answer = document.querySelector(`[data-answer="${questionNumber}"]`);
  console.log(question, answer);
  answer.classList.toggle('hidden');

  //arrow animation
  const arrowIcon = document.querySelector(
    `[data-question-arrow="${questionNumber}"]`
  );
  if (!answer.classList.contains('hidden')) {
    arrowIcon.classList.add('arrow-spin');
    arrowIcon.classList.remove('arrow-spin-2');
  } else {
    arrowIcon.classList.remove('arrow-spin');
    arrowIcon.classList.add('arrow-spin-2');
  }
});

console.log('js is working');
featuresBtnContainer.addEventListener('click', function (e) {
  e.preventDefault();

  //selecting feature container
  const feature = e.target;
  const featureNumber = feature.dataset.feature;
  if (!featureNumber) return;
  console.log(feature, featureNumber);

  //remove and add hidden class to features containers
  featuresContainers.forEach(f => {
    console.log(f.dataset.featurecontainer);
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

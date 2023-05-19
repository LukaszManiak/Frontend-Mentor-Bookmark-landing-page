'use strict';

const faqContainer = document.querySelector('.faq-container');
const answerBox = document.querySelector('.answer');
const arrowIcon = document.querySelector('.arrow-icon');
const featuresBtnContainer = document.querySelector('select-btns-container');
const featuresSlider = document.querySelector('features-slider');
const featuresContainer = document.querySelector('features-container');

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
  if (!answer.classList.contains('hidden')) {
    arrowIcon.classList.add('arrow-spin');
    arrowIcon.classList.remove('arrow-spin-2');
  } else {
    arrowIcon.classList.remove('arrow-spin');
    arrowIcon.classList.add('arrow-spin-2');
  }
});

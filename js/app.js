$(document).ready(function() {
 'use strict';

 var questions = [{
  question: 'What is the capital city of Australia?',
  choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
  correctAnswer: 'Canberra'
 }, {
  question: 'What is the capital city of Germany?',
  choices: ['Frankfurt', 'Berlin', 'Munich', 'Hamburg'],
  correctAnswer: 'Berlin'
 }, {
  question: 'What is the capital city of Russia?',
  choices: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Volgograd'],
  correctAnswer: 'Moscow'
 }, {
  question: 'What is the capital city of China?',
  choices: ['Wuhan', 'Guangzhou', 'Shanghai', 'Beijing'],
  correctAnswer: 'Beijing'
 }, {
  question: 'What is the capital city of Mexico?',
  choices: ['Mexico City', 'Guadalajara', 'Tijuana', 'Acapulco'],
  correctAnswer: 'Mexico City'
 }];

 var currentQuestion = 0;
 var score = 0;

 init();

 function init() {
  generateChoices();
 }

 $('.choices').on('click', 'li', function() {
  validateChoice($(this).text());
 });

 function reset() {
  currentQuestion = 0;
  score = 0;
  $('.message').empty()
  init();
 }

 function generateChoices() {

  if (currentQuestion >= questions.length) {
   $('.message').text('Your answered ' + score + ' questions!');
   $('.question').text('Click to reset')
   $('.question').on('click', function() {
    reset();
   })
  }

  $('.question').text(questions[currentQuestion].question);
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
   $('.choices').append('<li>' + questions[currentQuestion].choices[i] + '</li>');
  }
 }

 function nextQuestion() {
  currentQuestion++;
  score++;
  emptyPreviousQuestion();
  generateChoices();
 }

 function emptyPreviousQuestion() {
  $('.choices').empty();
  $('.question').empty();
 }

 function validateChoice(choice) {
  if (choice === questions[currentQuestion].correctAnswer) {
   $('.message').text('answer is correct');
   nextQuestion();
  } else {
   $('.message').text('incorrect');
  }
 }
});
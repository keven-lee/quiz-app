$(document).ready(function () {
 'use strict';
 var allQuestions = [{
   question: 'What is the capital city of Australia?',
   choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
   correctAnswer: 2
 }, {
   question: 'What is the capital city of Germany?',
   choices: ['Frankfurt', 'Berlin', 'Munich', 'Hamburg'],
   correctAnswer: 1
 }, {
   question: 'What is the capital city of Russia?',
   choices: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Volgograd'],
   correctAnswer: 0
 }, {
   question: 'What is the capital city of China?',
   choices: ['Wuhan', 'Guangzhou', 'Shanghai', 'Beijing'],
   correctAnswer: 3
 }, {
   question: 'What is the capital city of Mexico?',
   choices: ['Mexico City', 'Guadalajara', 'Tijuana', 'Acapulco'],
   correctAnswer: 0
 }];

 var currentQuestion = 0;
 var score = 0;
 var answerKey = [2, 1, 0, 3, 0]



 function newGame() {
   currentQuestion = 0;
   score = 0;
   
  
 }



 $('body').on('click', '.nextButton', function () {

   $(this).val('Next');

   validate();
   if (currentQuestion < allQuestions.length) {
     populateQuestion(currentQuestion);
     currentQuestion++;
   } 

 });



 function populateQuestion(i) {
   var individualQuestion = allQuestions[i];
   $('#questionTitle').text(individualQuestion.question);
   $('#selectionList').empty();
   for (var j = 0; j < individualQuestion.choices.length; j++) {
     $('#selectionList').append("<input type='radio' name = 'choices' id='radio_" + j + "'>" + individualQuestion.choices[j] + "</input>");
   }
 }

 function validate() {
   if (currentQuestion > allQuestions.length - 1) {
     if ($("#radio_"+answerKey[currentQuestion-1]+"").is(":checked")) {
     score++;
     } 
     $('#questionTitle').text('You scored ' + score + ' out of 5!');
     $('#selectionList').empty();
     $('.nextButton').val('Start');
     $('.nextButton').on('click', function() {
      newGame();
     });

   } else if ($("input[type=radio]:checked").length < 1 && currentQuestion != 0) {
     alert('Please select a city');
     preventDefault();

   } else if ($("#radio_"+answerKey[currentQuestion-1]+"").is(":checked")) {
     score++;
   }
 }



});
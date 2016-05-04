$(document).ready(function() {
var allQuestions = [{
  question: 'What is the capital city of Australia?',
  choices: ['Sydney', 'Melbourne', 'Canberra', 'London'],
  correctAnswer: 2
},
{
  question: 'What is the capital city of Germany?',
  choices: ['Frankfurt', 'Berlin', 'Munich', 'Hamburg'],
  correctAnswer: 1
},
{
  question: 'What is the capital city of Russia?',
  choices: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Volgograd'],
  correctAnswer: 0
},
{
  question: 'What is the capital city of China?',
  choices: ['Wuhan', 'Guangzhou', 'Shanghai', 'Beijing'],
  correctAnswer: 3
},
{
  question: 'What is the capital city of Mexico?',
  choices: ['Mexico City', 'Guadalajara', 'Tijuana', 'Acapulco'],
  correctAnswer: 0
}];
var i = 0;
var score = 0;
var answerKey = [2,1,0,3,0]



$('.nextButton').on('click', function() {
    $('.nextButton').val('Next')
    checkSelection();


    if (i>allQuestions.length -1) {
       $('body').text('You scored '+score+' out of 5!')
       var $input = $('<input class="nextButton" type="button" value="Start" />');
       $input.appendTo($("body"));
       reset();

    }    
    populateQuestion(i);


    i++;
});

function reset(){
  i = 0;
  score = 0;
}

function populateQuestion(i) {
    var individualQuestion = allQuestions[i];
    $('#questionTitle').text(individualQuestion.question);
    $('#selectionList').empty();
    for (j = 0; j < individualQuestion.choices.length; j++) {
    $('#selectionList').append("<input type='radio' name = 'choices' id='radio_"+j+"'>"+individualQuestion.choices[j]+"</input>");
    }
}

function checkSelection() {
  if ($("input[type=radio]:checked").length < 1 && i != 0 ) { 
    alert('Please select a city');
    preventDefault();
  }
  else if ($("#radio_"+answerKey[i-1]+"").is(":checked")) {
    score++;
  }
}
});
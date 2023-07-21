// query selectors

var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('input[name="option"]');

// event listeners
messageButton.addEventListener('click', function () {

});

var currentQuote; //data model


// functions



//create function that

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomQuote(array) {
  currentQuote = array[getRandomIndex(array)];
  return currentQuote
}
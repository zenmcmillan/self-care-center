// query selectors

// var affirmationsRadioButton = document.querySelector('.radio-button-affirmations');
// var mantraRadioButton = document.querySelector('.radio-button-mantras');
var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('.radio-buttons');

messageButton.addEventListener('click', function() {
  getValue()
});

function getValue() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
     return  console.log(radioButtons[i].value)
    }
  }
}

function getRandomQuote(array) {
  quote = array[getRandomIndex(array)]
  return quote
} // return a random quote in the array array[i]

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}// return a number that is within the length of the array
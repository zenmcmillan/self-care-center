// query selectors

var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('input[name="option"]');
// event listeners
//radioButtons.addEventListener('click',)
messageButton.addEventListener('click', function () {
  
checkRadioButtons()
});

var currentQuote; //data model


// functions



//create function that

function checkRadioButtons(affirmations) {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].id === 'affirmations') {
    currentQuote = getRandomQuote(affirmations)
    console.log("Hey")
    }
    
  }
  return currentQuote
}

function getRandomQuote(array) {
  var quote
  quote = array[getRandomIndex(array)];//
  return quote
  //updates data model by return quote
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}//returns a nubmer
// query selectors

// var affirmationsRadioButton = document.querySelector('.radio-button-affirmations');
// var mantraRadioButton = document.querySelector('.radio-button-mantras');
var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('.radio-buttons');
var meditationBell = document.querySelector('.meditation-bell');
var mainSection = document.querySelector('.quote-space');

var currentQuote;

messageButton.addEventListener('click', function() {
  chooseQuote();
  renderQuote(currentQuote);
});

function renderQuote(quote) {
  meditationBell.classList.add('hidden');
  
  mainSection.innerHTML = '';

  mainSection.innerHTML = `
  <main>
   <p class="quote">${quote}</p>     
  </main>`
}

function chooseQuote() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value === 'affirmations') {
       currentQuote = getRandomQuote(affirmations)
    }
    else if (radioButtons[i].checked && radioButtons[i].value === 'mantras') {
       currentQuote = getRandomQuote(mantras)
  }
 }
 return console.log(currentQuote)
}

function getRandomQuote(array) {
  var quote
  quote = array[getRandomIndex(array)]
  return quote
} // return a random quote in the array array[i]

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}// return a number that is within the length of the array
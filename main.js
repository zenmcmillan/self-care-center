// query selectors

var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('.radio-buttons');
var meditationBell = document.querySelector('.meditation-bell');
var mainSection = document.querySelector('.quote-space');
var loginContainer = document.querySelector('.second-container');
var loginInputs = document.querySelectorAll('.login');
var page = document.querySelectorAll('.page')
var body = document.querySelector('body');
var login = document.querySelector('.login')
var hey = document.querySelectorAll('.hey')


// data model

var currentQuote;

// event listeners
window.addEventListener('load', function() {
hideLoginPage() // hide login so you can initially see the site
this.setTimeout(showLoginPage, 1.5 * 1000)
});


function showLoginPage() {
  if (loginContainer.getAttribute("id") === "hidden")
  loginContainer.removeAttribute("id")
  for (var i = 0; i < page.length; i++) {
    page[i].classList.add('hidden');
  }
}


function hideLoginPage() {
  loginContainer.setAttribute("id", "hidden")
}
  
messageButton.addEventListener('click', function() {
  chooseQuote();
  renderQuote(currentQuote);
});

// event handlers

function renderQuote(quote) {
  
  meditationBell.classList.add('hidden');
  
  mainSection.innerHTML = '';

  mainSection.innerHTML = 
  `<main>
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
} 

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

// this.setTimeout(loadLoginPage, 3.0 * 1000)
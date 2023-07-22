// query selectors

var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('.radio-buttons');
var meditationBell = document.querySelector('.meditation-bell');
var mainSection = document.querySelector('.quote-space');
var loginContainer = document.querySelector('.second-container');
var loginInputs = document.querySelectorAll('.login');
var page = document.querySelectorAll('.page');
var body = document.querySelector('body');
var login = document.querySelector('.login');
var hey = document.querySelectorAll('.hey');
var signInButton = document.querySelector('.sign-in-button');
var loginFirstName = document.querySelector('.login-first-name');
var loginLastName = document.querySelector('.login-last-name')
var loginEmail = document.querySelector('.login-email')
var loginPassword = document.querySelector('.login-password')
var title = document.querySelector('.title')
// data model

var currentQuote;
var currentAccount;
var accounts = []


// event listeners

window.addEventListener('load', function() {
hideLoginPage() // hide login so you can initially see the site
showLoginPage()
// this.setTimeout(showLoginPage, 1.6 * 1000) // at the end when the project is over do this. Delay is wasting time right now
});

signInButton.addEventListener('click', function() {
 createAccount(loginFirstName.value, loginLastName.value, loginEmail.value, loginPassword.value) //data model
 removeLoginPage()
 
  //saveInputData(loginFirstName,)
});


// event handlers


function removeLoginPage() {
  loginContainer.setAttribute("id", "hidden") 
  for (var i = 0; i < page.length; i++) {
    page[i].classList.remove('hidden');
  }
  title.innerHTML = '';

  title.innerHTML +=
  `<h1 class="title">✨ Self Care Center ✨ 
  <p class="welcome" id="welcome-strong">Welcome ${currentAccount.firstName}</p>
  </h1>`     
}

function createAccount(firstName, lastName, email, password) {
   currentAccount = {
  firstName: firstName,
  lastName: lastName,
  emailAddress: email,
  password: password,
  }
  accounts.push(currentAccount)
  console.log(accounts)
  return console.log(currentAccount)
}


function showLoginPage() {
  if (loginContainer.getAttribute("id") === "hidden")
  loginContainer.removeAttribute("id")
  for (var i = 0; i < page.length; i++) {
    page[i].classList.add('hidden');
  }
}


function hideLoginPage() {
  loginContainer.setAttribute("id", "hidden")
  for (var i = 0; i < page.length; i++) {
    page[i].classList.add('hidden');
  }  
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


// this.setTimeout(showLoginPage, 1.6 * 1000)
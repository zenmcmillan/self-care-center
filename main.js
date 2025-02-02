// query selectors

var messageButton = document.querySelector('.receive-message-button');
var radioButtons = document.querySelectorAll('.radio-buttons');
var meditationBell = document.querySelector('.meditation-bell');
var mainSection = document.querySelector('.quote-space');
var loginContainer = document.querySelector('.second-container');
var page = document.querySelectorAll('.page');
var signInButton = document.querySelector('.sign-in-button');
var loginFirstName = document.querySelector('.login-first-name');
var loginLastName = document.querySelector('.login-last-name');
var loginEmail = document.querySelector('.login-email');
var loginPassword = document.querySelector('.login-password');
var title = document.querySelector('.title');

// data model

var currentQuote;
var currentAccount;
var accounts = [];

// event listeners

window.addEventListener('load', function() {
hideLoginPage();
this.setTimeout(showLoginPage, 1.6 * 1000);
});

signInButton.addEventListener('click', function() {
 holdLoginPage();
});

// event handlers

function holdLoginPage() {
  if (loginFirstName.value.length && loginLastName.value.length && loginEmail.value.length && loginPassword.value.length >= 8) {
    createAccount(loginFirstName.value, loginLastName.value, loginEmail.value, loginPassword.value);
    removeLoginPage();
   } else {
    window.alert('Sign up below.\n Make sure Password has at least 8 characters.');
  }
};

function removeLoginPage() {
  
  loginContainer.setAttribute("id", "hidden");
  for (var i = 0; i < page.length; i++) {
    page[i].classList.remove('hidden');
  }
  title.innerHTML = '';

  title.innerHTML +=
  `<h1 class="title">✨ Self Care Center ✨ 
  <p class="welcome" id="welcome-strong">Welcome ${currentAccount.firstName}</p>
  </h1>`     
};

function createAccount(firstName, lastName, email, password) {
   currentAccount = {
  firstName: firstName,
  lastName: lastName,
  emailAddress: email,
  password: password,
  };
  accounts.push(currentAccount);
  return currentAccount
};

function showLoginPage() {
  if (loginContainer.getAttribute("id") === "hidden");
  loginContainer.removeAttribute("id");
  for (var i = 0; i < page.length; i++) {
    page[i].classList.add('hidden');
  }
};

function hideLoginPage() {
  loginContainer.setAttribute("id", "hidden");
  for (var i = 0; i < page.length; i++) {
    page[i].classList.remove('hidden');
  }  
};
  
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
};

function chooseQuote() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value === 'affirmations') {
       currentQuote = getRandomQuote(affirmations);
    }
    else if (radioButtons[i].checked && radioButtons[i].value === 'mantras') {
       currentQuote = getRandomQuote(mantras);
     }
   }
   return currentQuote;
 }

function getRandomQuote(array) {
  var quote;
  quote = array[getRandomIndex(array)];
  return quote;
} 

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



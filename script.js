// assignment code here
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// space is used to make the above letters convert to capital letters if required
space =[];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

// references to the #generate element
var get = document.querySelector("#generate");

// event listener to generate button
get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// start function to write password
function generatePassword() {
  enter= parseInt(prompt("Between 8 and 128 characters, how long would you like your password?"));
  if (!enter) {
    alert("Please select a value as requested");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please choose a number between 8 and 128"));
  
  } else {
    confirmNumber = confirm("Should it contain numbers?");
    confirmCharacter = confirm("Should it contain SPECIAL characters?");
    confirmUppercase = confirm("Should it contain CAPITAL letters?");
    confirmLowercase = confirm("Should it contain LOWERCASE letters?");
  }

// all negative options
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("No criteria has been chosen");
  }


// if only 1 positive option
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  }
  else if (confirmLowercase) {
    choices = alpha;
  }

// if only 2 positive options
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(number);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);
  }
  else if (confirmNumber && confirmUppercase) {
    cjoices = number.concat(alpha2);
  }

// if only 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha,alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha,alpha2);
  }

// if all 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase ) {
    choices =character.concat(number, alpha, alpha2);
  }

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput (ps) {
  document.getElementById("password").textContent =ps;

}
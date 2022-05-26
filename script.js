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
  return x.toUppercase();
};

alpha2 = alpha.map(toUpper);

// references to the #generate element
var get = document.querySelector("#generate");

// event listener to generate button
get.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});

// start function to write password
function writePassword() {
  enter= parseInt(prompt("Between 8 & 128 characters, how long would you like your password?"));
  if (!enter) {
    alert("Please select a value as requested...");
  } else if (enter <8 || enter > 128) {
    enter = parseInt(prompt("Please choose between 8 and 128."));
  
  } else {
    confirmNumber = confirm("Should it contain numbers?");
    confirmCharacter = confirm("Should this contain SPECIAL characters?");
    confirmUppercase = confirm("Should it contain CAPITAL letters?")
    confirmLowercase = confirm("Should it contain LOWERCASE letters?");
  };

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


// added event listener to copy to clipboard button


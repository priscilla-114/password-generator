// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var el_down = document.getElementById("geeks");
          function gfg_Run() {
            el_down.innerHTML = 
                Math.random().toString(36).slice(2) + 
                Math.random().toString(36)
                    .toUpperCase().slice(2);
            } 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

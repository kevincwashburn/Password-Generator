// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function createPassword(length, arrayofArrays) {
  var password = ""
  for (let i = 0; i < length; i++) {
     var whichArray = Math.floor(Math.random() * arrayofArrays.length)
     var randomCharacter = Math.floor(Math.random() * arrayofArrays[whichArray].length)
     password += arrayofArrays[whichArray][randomCharacter]
  }
  console.log(password)
  writePassword(password)
}

function questions(length) {
  console.log(length)
  var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '"', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var arrayofArrays = []
  if(confirm("Do you want special characters?")) {
    arrayofArrays.push(specialChar)
  } 
  if(confirm("Do you want lower case letters?")) {
    arrayofArrays.push(lowerCase)
  }
  if(confirm("Do you want upper case letters?")) {
    arrayofArrays.push(upperCase)
  }
  if(confirm("Do you want numbers?")) {
    arrayofArrays.push(nums);
  };
  if(arrayofArrays.length > 0) {
    createPassword(length, arrayofArrays);
  } else{
    alert("Select at least one character type.");
    questions(length);
  }
}

function start(){
    var length = parseInt(prompt("Enter how many characters you want your password to be."));
    if (length > 7 && length < 129) {
      questions(length)
    } else {
      alert("password must be between 8 and 128 characters.")
      start()
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", start);

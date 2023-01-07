// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var options = {
    passwordLen: 0,
    lowercase: false,
    uppercase: false,
    numeric: false,
    special: false,
  };
  var flag = false;
  do {
    options.passwordLen = parseInt(
      prompt("Please enter the length of the password(between 10 and 64): ")
    );
    if (options.passwordLen < 10 || options.passwordLen > 64) {
      alert("Does not meet length requirements");
    } else if (isNaN(options.passwordLen)) {
      // 22dsfhjkdfsjkhdfs - works
      //} else if(typeof options.passwordLen != "number"){
      alert("You need to enter a number");
    } else {
      flag = true;
    }
  } while (!flag);

  flag = false;
  alert(
    "Please choose one of the security options, Lowercase/Uppercase/Numeric characters/Special characters"
  );
  do {
    options.lowercase = confirm("Do you want lowercase?");
    options.uppercase = confirm("Do you want uppercase?");
    options.numeric = confirm("Do you want numeric characters?");
    options.special = confirm("Do you want special characters?");

    flag = options.lowercase || options.uppercase || options.numeric || options.special;

    if (!flag) {
      alert('You need to choose at least 1 security option, please retry');
    }
  } while (!flag);

  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  options = getPasswordOptions();
  console.log(options);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

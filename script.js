var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%&*_-";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
    var password = generatePassword(getLength());
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// add event listener
generateBtn.addEventListener("click", writePassword);

// total requested length
function getLength(){
    let characterTotal = window.prompt("Please enter a password length between 8 and 128 characters.");
    while (isNaN(characterTotal) || characterTotal < 8 || characterTotal > 128){
        characterTotal = window.prompt("Please enter a password length between 8 and 128 characters.");
    }

    return characterTotal;
    
}
// generate password function
function generatePassword(characterTotal) {
    let passwordRequirements = "";
    let passwordArray = [];

// user prompts
if (window.confirm("Would you like to include numbers?")){
    passwordRequirements += numberCharacters;
    passwordArray.push(getRandomCharacter(numberCharacters));
}
if (window.confirm("Would you like to include special characters?")){
    passwordRequirements += specialCharacters;
    passwordArray.push(getRandomCharacter(specialCharacters));
}
if (window.confirm("Would you like to include lowercase letters?")){
    passwordRequirements += lowercaseLetters;
    passwordArray.push(getRandomCharacter(lowercaseLetters));
}
if (window.confirm("Would you like to include uppercase letters?")){
    passwordRequirements += uppercaseLetters;
    passwordArray.push(getRandomCharacter(uppercaseLetters));
}

//returns to the function beginning if they didn't choose character types
if (passwordArray.length === 0) {
    alert("Please select at least one type of character.");
    return generatePassword(characterTotal);
}

// adds characters until length reaches character total request
while (passwordArray.length < characterTotal) {
    passwordArray.push(getRandomCharacter(passwordRequirements));
}
return passwordArray.join("");
}

//random character grabber
function getRandomCharacter(characterSet){
    let character = characterSet[Math.floor(Math.random() * characterSet.length)];
    return character;
}
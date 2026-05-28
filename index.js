//Generate two random passwords when the user clicks the "Generate passwords button"
// Each password should be 15 characters long
// Stretch goals
// Ability to set password length
// Add "copy-on-click"
// Toggle "symbols" and numbers on/off

const characters = [
  // Uppercase letters
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  // Lowercase letters
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  // Numbers
  '0','1','2','3','4','5','6','7','8','9',
  // Special characters on an English keyboard
  '!','@','#','$','%','^','&','*','(',')',
  '-','_','=','+','[',']','{','}','\\','|',
  ';',':',"'",'"',',','<','.','>','/','?','`','~'
]

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePasswords () {
    password1El.textContent = ""
    password2El.textContent = ""

    for (i = 0; i < 16; i++) {
        password1El.textContent += characters[Math.floor(Math.random() * characters.length)]
        password2El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}



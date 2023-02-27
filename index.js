const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let passOutputOne = document.querySelector(".pass-output-one");
let passOutputTwo = document.querySelector(".pass-output-two");


function generateCharacter() {
    let randomChar = Math.floor ( Math.random() * characters.length )
    return characters[randomChar]
}

function generatePassword() {
    let randomPassOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassOne += generateCharacter()
        passOutputOne.textContent = randomPassOne
        generateSecondPassword()
    } 
}

function generateSecondPassword() {
    let randomPassTwo = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassTwo += generateCharacter()
        passOutputTwo.textContent = randomPassTwo
    }
}

















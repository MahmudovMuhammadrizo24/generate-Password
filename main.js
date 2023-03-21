
/*const buttons = document.querySelectorAll("button");
const password_length = document.querySelector(".password_length");
const type_sybols = document.querySelectorAll(".type_sybols");
const generator = document.querySelector(".generator");
const textpassword = document.querySelector(".textpassword");
function len() {
    for (let button of buttons) {
        button.addEventListener("click", function () {
            password_length.innerText = button.innerText
            return button.innerText;
        })
    }
}
len()

generator.addEventListener("click", function () {

    for (let i = 0; i < type_sybols.length; i++) {

        function generatePassword(length) {
            const charset = "";
            let Uppercase = "QWERTYUIOPLKJHGFSAZXCVBNM";
            let Lowercase = "qwertyuioplkjhgfdsazxcvbnm";
            let number = "1234567890";
            let symbols = "[({/?<>@#$%!=*&^-";
            type[0].addEventListener("click", function () {
                charset += Uppercase;
            });
            type[1].addEventListener("click", function () {
                charset += Lowercase;
            })
            type[2].addEventListener("click", function () {
                charset += number;
            })
            type[3].addEventListener("click", function () {
                charset += symbols;
            })
            return charset;


        }
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }
    textpassword.innerText = generatePassword(len(button))

    //console.log(generatePassword(12)); //Example output: "2hAd1{8?qyWz"


})
*/
const passwordElement = document.querySelector('.textpassword');
const copyIconElement = document.querySelector('[data-testid="copyIcon"]');
const passwordLengthElement = document.querySelector('.password_length');
const uppercaseLettersElement = document.querySelector('.uppercase_letters');
const lowercaseLettersElement = document.querySelector('.lowercase_letters');
const includeNumbersElement = document.querySelector('.include_numbers');
const includeSymbolsElement = document.querySelector('.include_symbols');
const generateButtonElement = document.querySelector('.generator');

let includeUppercaseLetters = false;
let includeLowercaseLetters = false;
let includeNumbers = false;
let includeSymbols = false;
let passwordLength = 5;

function generatePassword() {
    let charset = '';
    if (includeUppercaseLetters) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercaseLetters) {
        charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        charset += '0123456789';
    }
    if (includeSymbols) {
        charset += '!@#$%^&*()_+-=[]{}\\|;:\'",.<>?/~`';
    }
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordElement.textContent = password;
}

function updatePasswordLength(length) {
    passwordLength = length;
    passwordLengthElement.textContent = length;
}

function updateUppercaseLetters(checked) {
    includeUppercaseLetters = checked;
}

function updateLowercaseLetters(checked) {
    includeLowercaseLetters = checked;
}

function updateNumbers(checked) {
    includeNumbers = checked;
}

function updateSymbols(checked) {
    includeSymbols = checked;
}

function copyPasswordToClipboard() {
    navigator.clipboard.writeText(passwordElement.textContent);
    alert('Password copied to clipboard!');
}

generateButtonElement.addEventListener('click', generatePassword);
copyIconElement.addEventListener('click', copyPasswordToClipboard);
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        updatePasswordLength(parseInt(button.textContent));
    });
});
document.querySelectorAll('.input').forEach(input => {
    input.addEventListener('change', () => {
        switch (input.nextElementSibling.classList[0]) {
            case 'uppercase_letters':
                updateUppercaseLetters(input.checked);
                break;
            case 'lowercase_letters':
                updateLowercaseLetters(input.checked);
                break;
            case 'include_numbers':
                updateNumbers(input.checked);
                break;
            case 'include_symbols':
                updateSymbols(input.checked);
                break;
            default:
                break;
        }
    });
});







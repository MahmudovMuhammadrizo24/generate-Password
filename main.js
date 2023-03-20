const buttons = document.querySelectorAll("button");
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








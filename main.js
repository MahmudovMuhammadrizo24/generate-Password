const buttons = document.querySelectorAll("button");
const password_length = document.querySelector(".password_length");
const type_sybols = document.querySelectorAll(".type_sybols");
const generator = document.querySelector(".generator");
const textpassword = document.querySelector(".textpassword");
function len() {
    for (let button of buttons) {
        button.addEventListener("click", function () {
            password_length.innerText = button.innerText
            return button.innerText
        })
    }
}
/*
generator.addEventListener("click", function () {
    function generatePassword(length) {
        for (let type of type_sybols) {

            type[0].addEventListener("click", function () {
                let Uppercase = "QWERTYUIOPLKJHGFSAZXCVBNM";
                let Lowercase = "qwertyuioplkjhgfdsazxcvbnm";
                let number = "1234567890";
                let symbols = "[({/?<>@#$%!=*&^-";
                let password = Uppercase;
                for (let i = 0; i < length; i++) {
                    password += charset.charAt(Math.floor(Math.random() * charset.length));
                }
                return password;


            })

        }
    }
    textpassword.innerText = generatePassword(len())
})*/
generator.addEventListener("click", function () {



    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!=@#$%^&*()_+[]{}|;:,.<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return password;
    }

    //console.log(generatePassword(12)); //Example output: "2hAd1{8?qyWz"

    textpassword.innerText = generatePassword(5)
})








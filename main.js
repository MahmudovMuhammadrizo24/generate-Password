const buttons = document.querySelectorAll("button");
const password_length = document.querySelector(".password_length");
for (let button of buttons) {
    button.addEventListener("click", function () {
        password_length.innerText = button.innerText
    })
}













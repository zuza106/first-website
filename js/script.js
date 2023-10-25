console.log("Cześć! To moja pierwsza wiadomość.");

let button = document.querySelector(".button");
let secondButton = document.querySelector(".secondButton");
let mainColorTwo = document.querySelector(".mainColorTwo");
let secondText = document.querySelector(".secondText");



button.addEventListener("click", () => {
    mainColorTwo.remove();
});

secondButton.addEventListener("click", () => {
    secondButton.innerText =
        secondText.innerText === "Moje hobby"
            ? "Zmień tekst nagłówka"
            : "Zmień tekst ponownie";

    secondText.innerText =
        secondText.innerText === "Moje hobby" ? "Moje pasje" : "Moje hobby";
});

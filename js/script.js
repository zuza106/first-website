
{
    const welcome = () => {
        console.log("Cześć! To moja pierwsza wiadomość.");
    }

    const removeTextButton = () => {
        const welcomeText = document.querySelector(".js-welcomeText");
        welcomeText.remove();
    }



    const changeTextButton = () => {
        const secondButton = document.querySelector(".js-secondButton");
        const secondText = document.querySelector(".js-secondText");
        secondButton.innerText = secondText.innerText === "Moje hobby"
            ? "Zmień tekst nagłówka"
            : "Zmień tekst ponownie";
    }

    const changeText = () => {
        secondText.innerText = secondText.innerText === "Moje hobby" ? "Moje pasje" : "Moje hobby";

    }

    const init = () => {
        const button = document.querySelector(".js-button");
        removeTextButton.addEventListener("click")
        secondButton.addEventListener("click", changeTextButton, changeText)


        welcome();
    }

    init();
}

{
    const welcome = () => {
        console.log("Cześć! To moja pierwsza wiadomość.");
    }



    const changeText = () => {
        const secondText = document.querySelector(".js-secondText");
        secondText.innerText = secondText.innerText === "Moje hobby" ? "Moje pasje" : "Moje hobby";

    }
    const changeTextButton = (secondButton) => {
        secondButton.innerText = changeText.innerText === "Moje hobby"
            ? "Zmień tekst nagłówka"
            : "Zmień tekst ponownie";
    }



    const removeWelcomeText = () => {
        const welcomeText = document.querySelector(".js-welcomeText");
        welcomeText.remove();
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        const secondButton = document.querySelector(".js-secondButton");

        button.addEventListener("click", removeWelcomeText);
        secondButton.addEventListener("click", () => {
            changeTextButton(secondButton);
            changeText();
        });



        welcome();
    }

    init();
}
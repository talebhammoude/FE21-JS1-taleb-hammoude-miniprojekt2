const inputField = document.querySelector(".name-input");
const saveNameBtn = document.querySelector(".save-name");
const myName = document.querySelector(".my-name");

const theGame = document.querySelector(".the-game");
const yourName = document.querySelector(".your-name");





function setName () {

    saveNameBtn.addEventListener("click", (e) => {
        myName.innerHTML = inputField.value;
        inputField.value = "";

        theGame.setAttribute("style", "display: block");
        yourName.setAttribute("style", "display: none");

    });
}



setName();



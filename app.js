const inputField = document.querySelector(".name-input");
const saveNameBtn = document.querySelector(".save-name");
const myName = document.querySelector(".my-name");

const theGame = document.querySelector(".the-game");
const yourName = document.querySelector(".your-name");

const buttons = document.querySelectorAll("button");

const myChoice = document.querySelector(".my-choice");
const compChoice = document.querySelector(".comp-choice");



function compMakeChoice () {
    const choicesArray = ["Sten", "Sax", "Påse"];

    setTimeout(() => {
      compChoice.innerHTML = choicesArray[Math.floor(Math.random() * 3)];
    }, 2000);
    
}





function makeChoice () {

    buttons.forEach(btns => btns.addEventListener("click", (e) => {
        myChoice.innerHTML = e.target.value; 
        compMakeChoice();
       
    }));

}




function setName () {

    saveNameBtn.addEventListener("click", (e) => {
        myName.innerHTML = inputField.value;
        inputField.value = "";

        theGame.setAttribute("style", "display: block");
        yourName.setAttribute("style", "display: none");
        makeChoice();

    });
}






setName();





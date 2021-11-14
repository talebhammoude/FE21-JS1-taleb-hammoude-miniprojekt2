const inputField = document.querySelector(".name-input");
const saveNameBtn = document.querySelector(".save-name");
const myName = document.querySelector(".my-name");

const theGame = document.querySelector(".the-game");
const yourName = document.querySelector(".your-name");

const buttons = document.querySelectorAll("button");

const myChoice = document.querySelector(".my-choice");
const compChoice = document.querySelector(".comp-choice");

const myPoints = document.querySelector(".my-points");
const compPoints = document.querySelector(".comp-points");


let myPointsCounter = 0;
let compPointsCounter = 0;




function addWinPoints () {

    

    if (myChoice.innerHTML == "Sten" && compChoice.innerHTML == "Sax") {
        myPointsCounter ++; 
        myPoints.innerHTML = myPointsCounter;


    } else if (myChoice.innerHTML == "Sten" && compChoice.innerHTML == "Påse") {
        compPointsCounter ++;
        compPoints.innerHTML = compPointsCounter;

    } else if (myChoice.innerHTML == "Sax" && compChoice.innerHTML == "Sten") {
        compPointsCounter ++;
        compPoints.innerHTML = compPointsCounter;
    } else if (myChoice.innerHTML == "Sax" && compChoice.innerHTML == "Påse") {
        myPointsCounter ++; 
        myPoints.innerHTML = myPointsCounter;
    } else if (myChoice.innerHTML == "Påse" && compChoice.innerHTML == "Sten") {
        myPointsCounter ++; 
        myPoints.innerHTML = myPointsCounter;
    } else if (myChoice.innerHTML == "Påse" && compChoice.innerHTML == "Sax") {
        compPointsCounter ++;
        compPoints.innerHTML = compPointsCounter;
    } 





}




function compMakeChoice () {
    const choicesArray = ["Sten", "Sax", "Påse"];

    setTimeout(() => {
      compChoice.innerHTML = choicesArray[Math.floor(Math.random() * 3)];
      addWinPoints();
    }, 2000);


  

    
}





function makeChoice () {

    buttons.forEach(btns => btns.addEventListener("click", (e) => {

        myChoice.innerHTML = "";
        compChoice.innerHTML = "";

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





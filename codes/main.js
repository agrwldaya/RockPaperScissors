let choices = document.querySelectorAll(".choice");
let count1 = document.querySelector("#count1");
let count2 = document.querySelector("#count2");
let message = document.querySelector(".msg");
let yourchoise = document.querySelector(".yourchoise");
let compchoise= document.querySelector(".compchoise");
let newbtn = document.querySelector(".newbtn");
let sum1 = 0;
let sum2 = 0;


 let newgame = ()=>{
    sum1 =0;
    sum2 =0;
    count1.innerText = ``;
    count2.innerText =``;
    message.innerText = "";
    yourchoise.innerText = `You :`;
    compchoise.innerText = `Computer :`;}

newbtn.addEventListener("click",newgame);

const showWinner = (userWin) => {
    if (userWin) {
        
        message.innerText = "Winner";
        sum1++;
        count1.innerText = `${sum1}`;
    } else {
        message.innerText = "Lose";
        sum2++;
        count2.innerText =`${sum2}`;
    }
}

let computerChoice = (userChoice) => {
    const choicesArray = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
     
    const computerChoice = choicesArray[randomIndex];
      
    yourchoise.innerText = `You : ${userChoice}`;
    compchoise.innerText = `Computer : ${computerChoice}`;
    let userWin = false;
    let draw=false;
    if (userChoice === computerChoice) {
        message.textContent = "Draw";
        draw=true;
        
    } else {
        if (userChoice === "rock") {
            userWin = computerChoice == "scissor" ? true : false;
        } else if (userChoice == "paper") {
            userWin = computerChoice == "rock" ? true : false;
        } else {
            userWin = computerChoice == "paper" ? true : false;
        }
    }
    if(draw==false){
        showWinner(userWin);
    }


    
}
const drawGame = () => {
    console.log("draw");
    
}
let userChoiceId;

const one=document.querySelector("#rock");
const two=document.querySelector("#paper");
const three=document.querySelector("#scissor");

const arrayButton=[one,two,three];
arrayButton.forEach(element => {
    element.addEventListener('click',()=>{
        const userChoiceId = element.getAttribute("id");
        
                console.log(userChoiceId);
                computerChoice(userChoiceId);
    })
    
});


 


let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");

let getComputerChoice=()=>{
    let option=["rock","paper","scissors"];
    let random=Math.floor(Math.random()*3);
    return option[random];
};

const playGame = (userChoice)=>{
    console.log("User Choice",userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer Choice",computerChoice);
    if(userChoice===computerChoice){
        console.log("draw");
        msg.style.backgroundColor="#081b31";
        msg.innerText=`Game Draw ! Your Choice is ${userChoice} and Computer Choose ${computerChoice}`;
    }else{
        let userWin = false;
        if(userChoice==="rock"){
            //sc , pap
            if(computerChoice==="scissors"){
                userWin=true;
            }else{
                userWin=false;
            }
        }else if(userChoice==="paper"){
            //rock , sc
            if(computerChoice==="rock"){
                userWin=true;
            }else{
                userWin=false;
            }
        }else{
            //pap, rock
            if(computerChoice==="paper"){
                userWin=true;
            }else{
                userWin=false;
            }
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        console.log("You Win");
        userScore++;
        uscore.innerText=userScore;
        msg.innerText=`You Win ! Your Choice is ${userChoice} and Computer Choose ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You Lose");
        compScore++;
        cscore.innerText=compScore;
        msg.innerText=`You Loose ! Your Choice is ${userChoice} and Computer Choose ${computerChoice}`;
        msg.style.backgroundColor="red";
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
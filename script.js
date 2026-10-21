let container = document.querySelector(".container");
let weaponBox = container.querySelector(".weapon-box");
let playerChoicesBox =container.querySelector(".player-choices");
let weapons = weaponBox.querySelectorAll(".weapons div");
let player = playerChoicesBox.querySelector(".player-choice img");
let computer = playerChoicesBox.querySelector(".computer-choice img");
let rasultBox = container.querySelector(".result-box");
let resultTxt = rasultBox.querySelector("h3");
let PlayAgainBtn = rasultBox.querySelector("button");
let wonValueTxt = document.querySelector(".score-box .won h3 span");
let lostValueTxt = document.querySelector(".score-box .lost h3 span");
let drawValueTxt = document.querySelector(".score-box .Draw h3 span");
// initilize the scores
let won = 0, lost = 0, draw = 0 ;


let computerChoices =["Rock", "Paper", "scissors"];


let outcomes ={
    RockRock: "Draw",
    RockPaper: "Computer",
    RockScissors: "You",
    PaperPaper: "Draw",
    PaperRock:"You",
    PaperScissors: "Computer",
    ScissorsScissors: "Draw",
    ScissorsRock: "Computer",
    ScissorsPaper: "You"
};

// add event listener to the open choice
for(let i=0; i <weapons.length; i++){
    weapons[i].addEventListener("click",(e) =>{
        //set the revealing hands to rock
        player.src = "images/rock.png";
        computer.src =`images/rock.png`;

        // hide the weapon box and show the player choices
        weaponBox.style.display ="none";
        playerChoicesBox.style.display ="block";

        // Add a delay before showing the player choices
        setTimeout(()=>{
            playerChoicesBox.classList.add("active");
        }, 1000);

        setTimeout(()=>{
            let playeChoices =playerChoicesBox.querySelectorAll("div");
            for(let i=0; i< playeChoices.length; i++){
                playeChoices[i].style.animationPlayState ="paused";
            }
            //set the player choice to the selected weapon 
            player.src = e.target.src;

            //Generate a random computer choice 
            let randomChoice = computerChoices[Math.floor(Math.random() *
            computerChoices.length)];
            computer.src =`images/${randomChoice}.png`;
            console.log(randomChoice);

            let userChoice = e.target.parentElement.className;
            let outcomeValue = outcomes[userChoice + randomChoice];
            showResult(outcomeValue);

        }, 3000);
    })
}

//fuction to show the result  of the game 
let showResult = (result) =>{
    console.log(result);
    // show the result box and set the container height
    container.style.height ="415px";
    rasultBox.style.display ="block";

    //update the result text
    if(result === "You"){
        resultTxt.innerHTML = "Congrats, You Won! &#x1F389;";
        won++;
        wonValueTxt.innerHTML = won;
    }else if(result ==="Computer"){
        resultTxt.innerHTML ="You Lost!";
        lost++;
        lostValueTxt.innerHTML = lost;
    }else{
        resultTxt.innerHTML ="Match Draw!";
        draw++;
        drawValueTxt.innerHTML = draw;
    };
};


PlayAgainBtn.addEventListener("click", ()=>{
    //reset the game state
    playerChoicesBox.classList.remove("active");
    container.style.height ="380px";
    rasultBox.style.display ="none";
    weaponBox.style.display ="block";
    playerChoicesBox.style.display ="none";
//resume the animation 
    let playeChoices =playerChoicesBox.querySelectorAll("div");
        for(let i=0; i< playeChoices.length; i++){
            playeChoices[i].style.animationPlayState ="running";
            }
})
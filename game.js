let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let new_game=document.querySelector("#new-game");
let msg1Container = document.querySelector(".msg-container");
let msg1=document.querySelector("#msg");
//playerX, playerO
let turnX = true;
let clickBtn =0;
let Xscore=0;
let Oscore =0;
let Xscorepara=document.querySelector("#X-score");
let Oscorepara=document.querySelector("#O-score");


const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        
        if(turnX===true) {
            box.innerText ="X";
            // clickBtn++;
            turnX = false;
        }else{
            box.innerText = "O";
            turnX = true;
            // clickBtn++;
        }
        box.disabled = true;
        clickBtn++;
        console.log(clickBtn);
        let isWinner = checkWinner();

        if (clickBtn === 9 && !isWinner) {
          gameDraw();
        }
         
        
        
    });
});
const resetGame =() =>{
    turnX = true;
    clickBtn=0;
    enableBoxes();
    msg1Container.classList.add("hide");
    

};
const gameDraw = () => {
    msg1.innerText = `Game was a Draw. Start New game`;
    msg1Container.classList.remove("hide");
    disabledBoxes();
  };

const enableBoxes =() =>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText ="";
    }
};

const disabledBoxes =() =>{
    for(let box of boxes ){
        box.disabled = true;
    }
};

const showWinner=(winner) => {
    msg1.innerText=`Congratulations!! Winner is ${winner}`;
    msg1Container.classList.remove("hide");
    disabledBoxes();
    if(winner === "X"){
        Xscore++;
        Xscorepara.innerText =Xscore;
    }else{
        Oscore++;
        Oscorepara.innerText = Oscore;
    }
};

const checkWinner=() => {
for(let pattern of winPatterns){
    
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val !="" && pos2Val !="" && pos3Val !="" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
          console.log("winner",pos1Val); 
          showWinner(pos1Val); 
          return true;
        }
     }
  }
};
new_game.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
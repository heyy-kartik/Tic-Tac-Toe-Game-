let boxs = document.querySelectorAll(".box");
let resetBtn =document.querySelector(".btnReset");
let newgameBTN = document.querySelector(".newGame");
let winnerSec = document.querySelector(".winnerSec");
let turnO= true;
let WinPatterns = [ [0,3,6], [0,1,2], [0,4,8] ,[ 1,4,7], [2,4,6], [ 2,5,8], [3,4,5], [6,7,8]];


boxs.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
if (turnO){
    box.innerHTML = "O";
    turnO = false; 
} else {
    box.innerHTML = "X";
    turnO = "true";
}
 box.disabled = true;

 checkWinner (); 
    });
});
       
const showWinnerMessage = (winner) => alert(`Winner is ${winner}!`);

const resetGame =()=>{
    turnO = true;
    EnabledBoxes();
}


const DisabledBoxes = () =>{
    for( let box of boxs){
        box.disabled = true;
    }
};

const EnabledBoxes = () =>{
    for (let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}


const checkWinner = ()=>{
 for ( let Patterns of WinPatterns){
      let pos1=boxs[Patterns[0]].innerText;
      let posl2 = boxs[Patterns[1]].innerText;
      let pos3 = boxs[Patterns[2]].innerText;
        
  if (pos1 != "" && posl2 != "" &&  pos3 != "")   {
    if (pos1 ===posl2 && posl2=== pos3)

    console.log("Winner is :" , pos1)
  showWinnerMessage(pos1);
      DisabledBoxes();
      return;
    
    }
  }  
 }
 

EnabledBoxes();
newgameBTN.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
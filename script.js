    const listOfDie=document.querySelectorAll(".btn");
    const result=document.getElementById("result");
    var whoWins;
    const comp=document.getElementById('computer');
    const player=document.getElementById('player');
    var current="X";
    const modal=document.getElementById('modal');
    const playAgain=document.getElementById('close-modal');
    
    
const pattern=[[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]];
              
listOfDie.forEach((btn)=>{
  btn.onclick=()=>{
    result.textContent="Please select a mode to start playing";
    showModal();
    
  };
});            
              
function showModal(){
  modal.style.display="flex";
playAgain.onclick=()=>{
  reset();
  modal.style.display="none";
};
}
              
comp.addEventListener('click', () => {
  reset();
  listOfDie.forEach((btn) => {
    btn.onclick = () => {
      if (btn.textContent === "") {
        btn.textContent = "\u274C";

        if (win()) {
          if (whoWins === "\u274C") {
            result.textContent = "Player Wins";
            showModal();
            return;
          } else if (whoWins === "\u{2B55}") {
            result.textContent = "Computer wins";
            showModal();
            return;
          }
        } else if (draw()) {
          result.textContent = "Draw";
          showModal();
          return;
        }

        computerTurn();

        if (win()) {
          if (whoWins === "\u274C") {
            result.textContent = "Player Wins";
            showModal();
            return;
          } else if (whoWins === "\u{2B55}") {
            result.textContent = "Computer wins";
            showModal();
            return;
          }
        } else if (draw()) {
          result.textContent = "Draw";
          showModal();
          return;
        }
      }
    };
  });
});

player.addEventListener('click',()=>{
  reset();
  listOfDie.forEach((btn) => {
    btn.onclick = () => {
      if(btn.textContent===""){
        btn.textContent=current==="X"?"\u274C":"\u{2B55}";
        
        if (win()) {
          if (whoWins === "\u274C") {
            current="X";
            result.textContent = "Player1 Wins";
            showModal();
            return;
          } else if (whoWins === "\u{2B55}") {
            current="X";
            result.textContent = "Player2 wins";
            showModal();
            return;
          }
        } else if (draw()) {
          current="X";
          result.textContent = "Draw";
          showModal();
          return;
        }
        
        current=current==="X"?"O":"X";
       
      }
    };
  });
  current="X";
});
/*if (win()) {
          if (whoWins === "\u274C") {
            result.textContent = "Player Wins";
            return;
          } else if (whoWins === "\u{2B55}") {
            result.textContent = "Computer wins";
            return;
          }
        } else if (draw()) {
          result.textContent = "Draw";
          return;
        }*/
//btn.textContent=current==="X"?"\u274C":"\u{2B55}";
function computerTurn(){
  var x=Math.floor(Math.random()*9);
  if(listOfDie[x].textContent==="")
    {listOfDie[x].textContent="\u{2B55}";
     }
  else{
    computerTurn();
  }
}


function win(){
  var flag=false;
  for(var i=0;i<pattern.length;i++){
    //added the first part to check if it isnt empty
    if( listOfDie[pattern[i][0]].textContent !== "" &&listOfDie[pattern[i][0]].textContent==listOfDie[pattern[i][1]].textContent&&listOfDie[pattern[i][1]].textContent==listOfDie[pattern[i][2]].textContent)
    {
      whoWins=listOfDie[pattern[i][0]].textContent
      flag=true;
    }
  }
/*if (flag) {
setTimeout(() => reset(), 5000);
}//it will only be reset if the player won */
  
  return flag;
}

function reset(){
  listOfDie.forEach((btn)=>{
    btn.textContent="";
  });
  result.textContent="";
}

function draw(){
  for(let i=0;i<9;i++){
    if(listOfDie[i].textContent==="")
    return false;
  }
  return true;
}

const resetBtn=document.getElementById("reset");
resetBtn.addEventListener("click",()=>{
  reset();
});


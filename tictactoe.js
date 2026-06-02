let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgCont=document.querySelector(".msg-container");
let msg=document.querySelector("#message");

let turnO=true;//playerX,playerO
let count=0;//to count the number of moves

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];//winning patterns in tic tac toe

const resetGame=()=>{
  turnO=true;
  count=0;
  enableBoxes();
  msgCont.classList.add("hide");
}

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){  //player O's turn
      box.innerText="O";
      turnO=false;
    }else{      //player X's turn
      box.innerText="X";
      box.style.color="blue";
      turnO=true;
    }
    box.disabled=true; //disable the box after it's clicked
    count++;

   let isWinner= checkwinner();
   if(count==9 && !isWinner){
    gameDraw();
   }
  });
});
const gameDraw=()=>{
msg.innerText="It's a draw!";
msgCont.classList.remove("hide");
disableBoxes();
};

const enableBoxes=()=>{
for(let box of boxes){
  box.disabled=false;
  box.innerText="";
}
};

const disableBoxes=()=>{
for(let box of boxes){
  box.disabled=true;
}
}
const showWinner=(winner)=>{
  msg.innerText=`Congratulations! The winner is ${winner}`;
  msgCont.classList.remove("hide");
  disableBoxes();
};
const checkwinner=()=>{
  for(let pattern of winPatterns){
    /*console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);*/
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val==pos2val && pos2val==pos3val){
        showWinner(pos1val);
      }
    }
  }

};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);


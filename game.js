let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msgcontainer= document.querySelector(".msg");
let msg=document.querySelector("#msg1");

let turn0=true;
let count=0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msgcontainer.classList.add("hide");
  };

const resetgame=()=>
{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if(turn0===true)
{
    box.innerHTML="O";
    turn0=false;
}
else{
    box.innerHTML="X";
    turn0=true;
}

box.disabled=true;
count++;

let iswinner=checkwinner();

if (count === 9 && !iswinner) {
    gameDraw();
  }
});
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
  };

const disabledboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};


const showwinner=(winner)=>{
    msg.innerHTML=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner =()=>{
    for(let pattern of winPatterns){
let pos1val=boxes[pattern[0]].innerHTML;
let pos2val=boxes[pattern[1]].innerHTML;
let pos3val=boxes[pattern[2]].innerHTML;

if(pos1val!="" && pos2val!="" && pos3val!="")
{
    if(pos1val===pos2val && pos2val===pos3val){
        showwinner(pos1val);
    }
}
    }
};

resetBtn.addEventListener("click",resetgame);
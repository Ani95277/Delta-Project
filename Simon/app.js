let gameseq=[];
let userseq=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];


let started=false;
let level =0;

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Your Game has started");
        started=true;
        levelup();

        
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq)
    gameFlash(randBtn);
}
function btnpress(){
    
    let btn=this;//Variable btn is local varible for btnpress fucntion
    userFlash(btn);
    usercolor =btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function checkAns(idx){
    console.log(`Current level ${level}`);
    
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length){
        setTimeout(levelup(),500);
       }
       
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br> Please Try again`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";

        },200);
        resetGame();
    }
  

}
function resetGame(){
    let gameseq=[];
    let userseq=[];
    let started=false;
    let level =0;


}
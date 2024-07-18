const Num=prompt("Enter the max number");
console.log(Num);

const random=Math.floor(Math.random() * Num)+1;

let guess=prompt("try to guess the number")

while(true){
    if(guess =="quit"){
        console.log("User quit the game");
        break;
    }

    if(guess == random){
        console.log("Congrats you win the game. The Number was ", random);
        break;

    }else if(guess < random){
        guess=prompt("You have enter a small number please try again");
    }else{
        guess=prompt("You have enter a large number please try again");
    }
}

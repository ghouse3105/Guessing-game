let max=prompt("enter the max number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("game is quitting");
        break;
    }
    if(guess==random){
        console.log("your guess is correct , congrats! and your random number was" ,random);
        break;
    }
    else if(guess < random){
        guess=prompt("your guess was small, enter some larger number");
    }
    else{
        guess=prompt("your guess is large,enter some smaller number");
    }
    
}
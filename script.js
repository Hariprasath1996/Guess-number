// select input tag  and para tag 
let guessNumber=document.getElementById("guessNumber")
let result = document.getElementById("result")
let score = document.getElementById("score")
// create randomNumber variable  (its created for which number are you typing in input tag)
let randomNumber = Math.floor(Math.random()*10)+1
let totalScore=10;

function update(){
    let enteredNumber = guessNumber.value
    if(randomNumber==enteredNumber){
        console.log("correct");
        result.textContent = "Result : "+"you are correct"
    

    }
    else{
        totalScore=totalScore-1
        score.textContent="Your score: "+totalScore
        result.textContent = "Result : "+"you are wrong"
        
    }

}

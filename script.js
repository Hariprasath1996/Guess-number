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
        result.textContent = "RESULT : "+"YOU ARE CORRECT"
        result.style.color = "rgb(6, 250, 47)"
        score.style.color = "rgb(6, 250, 47)"
    }
    else{
        totalScore=totalScore-1
        score.textContent="YOUR SCORE: "+totalScore
        result.textContent = "RESULT : "+"YOU ARE WRONG"
        result.style.color = " rgb(250, 6, 6)"
        score.style.color = " rgb(250, 6, 6)"

    }
}

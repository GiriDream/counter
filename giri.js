let result = document.getElementById('gameResult');
let input = document.getElementById('userInput');




let randomNumber = Math.random() * 100;
let roundNumber = Math.ceil(randomNumber);








function checkGuess(){
    let summary = input.value;
    let inputNumber = parseInt(summary);
    
    if (inputNumber === roundNumber){
        result.textContent = "Congratulations! You guessed the correct number.";
        result.style.backgroundColor ="green"

    }
    else if (inputNumber > roundNumber){
        result.textContent = "Your guess is too high. Try again.";
        result.style.backgroundColor ="red"

    }
    else if(inputNumber < roundNumber) {
        result.textContent = "Your guess is too low. Try again.";
        result.style.backgroundColor ="black"
    }
    else {
        result.textContent = "Please enter a valid number.";
        result.style.backgroundColor ="yellow"
    }
   

}
    
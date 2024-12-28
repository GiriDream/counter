let counterElement = document.getElementById("counter")

function decrease(){
    let preCounter = counterElement.textContent;
    let updateCounter = parseInt(preCounter) - 1;
    counterElement.textContent = updateCounter;
    if(updateCounter > 0){
        counterElement.style.color = 'green'

    }
    else if(updateCounter < 0){
        counterElement.style.color ='red'

    }
    else{
            counterElement.style.color = 'black'
    }
    

    
    

}

function increase(){
    let preCounter = counterElement.textContent;
    let updateCounter = parseInt(preCounter) + 1;
    counterElement.textContent = updateCounter;
    if(updateCounter > 0){
        counterElement.style.color = 'green'

    }
    else if(updateCounter < 0){
        counterElement.style.color ='red'

    }
    else{
            counterElement.style.color = 'black'
    }

}

function reset(){

   let preCounter = counterElement.textContent = 0
   counterElement.style.color = 'black'

}



 















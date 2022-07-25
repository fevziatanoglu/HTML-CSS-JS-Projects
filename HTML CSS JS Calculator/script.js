const buttons = document.querySelectorAll(".btn");
const buttonsArray = Array.from(buttons);
const screen = document.querySelector("#screen");

var writeOperator = false;


buttonsArray.forEach(button => {

    button.addEventListener("click" , function(e){

        if(button.classList.contains("number-btn")){
             
             screen.value += button.innerText;
             console.log(button.innerText);

             
        }

        else if(button.classList.contains("operation-btn") && writeOperator){
            screen.value += button.innerText;
             console.log(button.innerText);

             writeOperator = false;
             writeNumber = true;
        }
        
        else if(button.classList.contains("equal-btn") && writeOperator){
            screen.value = eval(screen.value);
        }

       

    });

})


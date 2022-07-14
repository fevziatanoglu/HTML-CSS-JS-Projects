const buttons = document.querySelectorAll(".number-btn");
const buttonsArray = Array.from(buttons);

const screen = document.querySelector("#screen");
buttonsArray.forEach(button => {
    button.addEventListener("click" , function(e){
        screen.value += button.innerText;
        console.log(button.innerText);
    });

})


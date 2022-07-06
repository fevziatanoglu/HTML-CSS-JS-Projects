const character = document.querySelector(".character");
const block = document.querySelector(".block");
const gameOverText = document.querySelector(".gameover");


function jump(){
    character.classList.add("animate");
    character.addEventListener("animationend" , function (e){
        character.classList.remove("animate")});
}


let gameOver = setInterval(function (e){

let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

if(blockLeft <= 220 && blockLeft >= 200 && characterTop >= 130){
    console.log("Game over");
    block.style.animation = "none";
    gameOverText.style.display = "grid";
    gameOverText.style.position = "absolute";
    gameOverText.style.top = "50px";
    gameOverText.style.left = "710px";
    
   
}
    

    

},10);

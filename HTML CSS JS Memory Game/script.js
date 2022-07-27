const cards = document.querySelectorAll(".card");
const cardsList = Array.from(cards);


var clickChange =   2;
var firstCard;
var secondCard;

function closeCards(){
    firstCard.children[1].style.display = "none";
    firstCard.children[0].style.display = "block";

    secondCard.children[1].style.display = "none";
    secondCard.children[0].style.display = "block";
}

function openCard(card){
    card.children[1].style.display = "block";
    card.children[0].style.display = "none";
    clickChange--;
}

function animateCard(card,animation){
    card.style =`animation: ${animation} 0.35s ease-in-out`;
}

function clickCard(card){
    animateCard(card,"flip");

    if(clickChange > 0){

        if(clickChange ==2) {
            firstCard = card;
        }
        else if(clickChange == 1){
            secondCard = card;
        }
        
        openCard(card);   
    }

}

function controlCards(card){
    if(clickChange == 0)
    {
     setTimeout(function(){
      if(!(firstCard.children[1].src == secondCard.children[1].src)){ 
             animateCard(firstCard,"shake");
             animateCard(secondCard,"shake");}
            
            else{
                animateCard(firstCard,"up");
                animateCard(secondCard,"up");

                firstCard.style.backgroundColor="green";
                secondCard.style.backgroundColor="green";
        }
        } , 500);


     setTimeout(function(){
      if(!(firstCard.children[1].src == secondCard.children[1].src)){  
        closeCards();
      }

      clickChange=2;} , 1000);

    }
 
}

cardsList.forEach(card =>{
card.addEventListener("click" , function(e){
        
        clickCard(card);
        controlCards(card);
                }
            );
        }
    );
         

    





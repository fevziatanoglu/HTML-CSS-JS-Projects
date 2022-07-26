const cards = document.querySelectorAll(".card");
const cardsList = Array.from(cards);


var clickChange =   2;




cardsList.forEach(card =>{
card.addEventListener("click" , function(e){
    console.log(clickChange);

    if(clickChange > 0){
        card.children[1].style.display = "block";
        card.children[0].style.display = "none";
        clickChange--;
        

           
            
    
    }
        
        setTimeout(function(){
        console.log("1.5 saniye oldu");
        card.children[1].style.display = "none";
        card.children[0].style.display = "block";
        clickChange++;
        } , 1500);
    
                
 
  
            }  
         );

    }
);

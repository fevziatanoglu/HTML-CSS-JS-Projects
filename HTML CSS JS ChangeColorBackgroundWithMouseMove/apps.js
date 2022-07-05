let container = document.querySelector(".container");
let colorText = document.querySelector(".color-text");


container.addEventListener('mousemove', function (e){
    console.log("X:" + e.clientX);
    console.log("Y:" + e.clientY);

    colorText.textContent =` R: ${e.clientX%255} G: ${e.clientX%255} B: ${(e.clientX,+e.clientY)%255}`;
     
    container.style.color =`rgb(${255-e.clientX%255},${255-e.clientX%255},${(255 - e.clientX,+e.clientY)%255})`;

    container.style.backgroundColor = ` rgb(${e.clientX%255},${e.clientX%255},${(e.clientX,+e.clientY)%255})`;

});

let x =5;
console.log(`${x} `);




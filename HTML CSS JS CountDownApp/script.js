const daysNumbers = document.querySelector(".days-container");
const hoursNumbers = document.querySelector(".hours-container");
const minutesNumbers = document.querySelector(".minutes-container");
const secondsNumbers = document.querySelector(".seconds-container");



const constDate = "1 January 2023"
function countDown(){
    const myDate = new Date();
    const newYearsDate = new Date(constDate);
    const remainingTime = newYearsDate-myDate;

    const days = Math.floor(remainingTime/1000/60/60/24);
    const hours = Math.floor(remainingTime/1000/60/60 %24);
    const minutes = Math.floor(remainingTime/1000/60 %60);
    const seconds = Math.floor(remainingTime/1000 %60);
 
    console.log(`${days} ${hours} ${minutes} ${seconds}`);

    daysNumbers.children[0].innerText = days;
    hoursNumbers.children[0].innerText = hours;
    minutesNumbers.children[0].innerText = minutes;
    secondsNumbers.children[0].innerText = seconds;
    
    
}


setInterval(countDown,1000);
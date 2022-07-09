class Person{
    constructor(name,surname,email){
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}


const personList = document.querySelector("#person-list");
const nameInput = document.querySelector("#name-input");
const surnameInput = document.querySelector("#surname-input");
const emailInput = document.querySelector("#email-input");

const form = document.querySelector("#form");

const errorInfo = document.querySelector(".info-error");
const successInfo = document.querySelector(".info-success");



form.addEventListener('submit',savePerson);

function savePerson(e){
    e.preventDefault();

    let person = new Person(nameInput.value , surnameInput.value , emailInput.value);

    if(checkData(person)){

        savePersonToList(person);
        errorInfo.style.display = "none";
        successInfo.style.display = "block";

        cleanData();


        //2 saniye sonra kapat
        setTimeout(function(){
        successInfo.style.display = "none";   
        },2000);
    }
    else{
        console.log("There is an empty input");
        successInfo.style.display = "none";
        errorInfo.style.display = "block";
    }
     
}


function checkData(person){

    let isDataFull = true;

    for(const data in person){
        if(person[data]){}
        else{isDataFull = false;}
    }
       return isDataFull;
}

function cleanData(){
    nameInput.value = "";
    surnameInput.value = "";
    emailInput.value = "";
}

function savePersonToList(person){

    const addPerson = document.createElement("tr");
    addPerson.innerHTML = `
                <tr>
                <td>${nameInput.value}</td>
                <td>${surnameInput.value}</td>
                <td>${emailInput.value}</td>
                <td>
                <button class="btn edit-btn"><i class="fa-solid fa-user-pen" style="pointer-events: none;"></i></button>
                <button class="btn delete-btn"><i class="fa-solid fa-trash" style="pointer-events: none;"></i></button>
                </tr>`

                personList.appendChild(addPerson);
}


personList.addEventListener("click" , personEvents);

function personEvents(e){
    
    if(e.target.classList.contains("delete-btn")){
    e.target.parentElement.parentElement.remove();
    }
    
    
}

console.log("Test");

const todoList = document.querySelector(".todo-list");

const todoInput = document.querySelector(".todo-input");

const todoAddButton = document.querySelector(".todo-add-btn");
const todoCheckButton = document.querySelector(".todo-check-btn");
const todoDeletekButton = document.querySelector(".todo-delete-btn");

todoAddButton.addEventListener('click',addTodoFunction);

todoList.addEventListener('click', deleteCheckTodoFunction);




function deleteCheckTodoFunction(e){
    
    let targetItem = e.target;
    let parentItem = targetItem.parentElement;
    
    
    
    
    if(targetItem.classList.contains('todo-check-btn')){
        console.log("checkbutton");

        //yoksa ekle varsa sil TOGGLE
        parentItem.classList.toggle("todo-list-item-checked");
    }
    
    
    if(targetItem.classList.contains('todo-delete-btn')){
        
        parentItem.classList.toggle("todo-list-item-deleted");

        //animasyon bittikten sonra calistir
        parentItem.addEventListener('transitionend' , function (e){
            targetItem.parentElement.remove();
        
        });

        //normal SİL
        //targetItem.parentElement.remove(); 
    }
    
    
    
    }

function addTodoFunction(e){
    if(todoInput.value === ""){
    }

    else{
    let newTodo = document.createElement('div');

    //style="pointer-events: none;" childa degil parenta tıklanmasını saglar
    newTodo.innerHTML =  `<li> <div class="todo-list-item"> <p class="todo-text">${todoInput.value}</p> <button class="todo-check-btn btn"><i style="pointer-events: none;" class="fa-solid fa-check"></i></button> <button class="todo-delete-btn btn"><i style="pointer-events: none;" class="fa-solid fa-trash-can"></i></button></div> </li> `;
    document.querySelector(".todo-list").appendChild(newTodo);

    //console.log(todoInput.value);
    todoInput.value = "";

    }

   
    e.preventDefault();
}






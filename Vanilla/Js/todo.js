const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault();
    const newtodo = todoInput.value;
    todoInput.value="";
}

todoForm.addEventListener("submit",handleToDoSubmit);
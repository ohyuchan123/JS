const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newtodo){
    const li = document.createElement('li');
    li.id = newtodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = "❌";
    button.classList.add('buttonstyle');
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newtodo.text;
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; 
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();

    // if(toDos.length !== 0){
    //     toDos.forEach(paintTodo);
    //     console.log(parsedToDos);
    // }
}

const SaveToDos = localStorage.getItem("toDos");
    if(SaveToDos !== null){
        const parsedToDos = JSON.parse(SaveToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintTodo);
        // console.log(parsedToDos);
    }

todoForm.addEventListener('submit',handleToDoSubmit);
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// #7.5 !중요 handleToDosubmit()의 toDos.push(newToDo)를 실행할때마다
// 텅빈 const toDos = []에 새로운 'c','d'를 넣어서 예전에 저장되어 있던
// toDos = ['a','b']가 초기화 되는것을 방지하기 위해 const -> let으로 한다
// toDos = parsedToDos를 추가해서 저장된 'a''b'를 다시 불러오는것도 중요함
let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // event.target = button
    // event.target.parentElement = li
    // test: console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
    // todo-list중에 x버튼을 누른 li의 id와 일치하지 않은 li들만 남겨준다
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function addToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li)
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    addToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit)

// 'saved'ToDos: function saveToDos()로 storage에 저장된 key & value를 불러옴
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    
    // parse(): Covert string into js object
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    // Shortcut! parsedToDo의 각각의 item들에 대해 => console.log 실행
    // parsedToDos.forEach((item) => console.log(item));
    parsedToDos.forEach(addToDo);
}


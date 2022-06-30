var todoInput = document.getElementById('addTaskText');
var addBtn = document.getElementById('addBtn');
var Tasks = document.getElementById('tasks');
window.addEventListener('load', getTodo)
addBtn.addEventListener('click', add);
function add(){
    var task = document.createElement('div');
    var deleteBtn = document.createElement('button');
    var icon = document.createElement('i');
    icon.className = 'fa-solid fa-trash-can';
    deleteBtn.className = "trash";
    task.className = 'task';
    task.innerText = todoInput.value;
    Tasks.appendChild(task);
    deleteBtn.appendChild(icon);
    task.appendChild(deleteBtn);
    saveLocalTodo(todoInput.value);
}
Tasks.addEventListener('click', deleter);
function deleter(event){
    var deleteItem = event.path[2];
    if(deleteItem.className == "task"){
        deleteItem.remove();
    }
}
function saveLocalTodo(todo){
    var todos;
    if(localStorage.getItem('todos') == null){
        localStorage.setItem('todos', todo)
    }else{
        localStorage.setItem('todos', localStorage.getItem('todos')+","+todo);
    }
}
function getTodo(){
    var TodoString = localStorage.getItem('todos');
    var arrayTodo = TodoString.split(",");
    arrayTodo.forEach((element)=>{
        var task = document.createElement('div');
        var deleteBtn = document.createElement('button');
        var icon = document.createElement('i');
        icon.className = 'fa-solid fa-trash-can';
        deleteBtn.className = "trash";
        task.className = 'task';
        task.innerText = element;
        Tasks.appendChild(task);
        deleteBtn.appendChild(icon);
        task.appendChild(deleteBtn);
    })
}
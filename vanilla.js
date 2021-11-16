//calling and accessing the toggle elements
let toggleBtn = document.querySelector('.fa-star-half-alt')
let bodyElement = document.querySelector('body')

//toggle the class (set and remove the class dark in every click)
function setDarkTheme(){
    bodyElement.classList.toggle('dark')
}

//add event listener to the btn
toggleBtn.addEventListener('click', switchTheme)

function switchTheme() {
    // Get the value of the "dark" item from the local storage on every click
  let darkMode = localStorage.getItem('dark')

  if (darkMode !== 'on') {
    //   Set the value of the item to "on" when dark mode is on
      setDarkTheme()
    darkMode = localStorage.setItem('dark', 'on')
  } else {
    //   Set the value of the item to  "null" when dark mode if off
      setDarkTheme()
    darkMode = localStorage.setItem('dark', 'off')
  }
}

// Get the value of the "dark" item from the local storage
let darkMode = localStorage.getItem('dark')

// check dark mode is on or off on page reload
if(darkMode === 'on'){
    setDarkTheme()
}

//set array
const tasks = [{text: "", isCompleted: false}, {text: "", isCompleted: false}, {text: "", isCompleted: false}]

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

 
//Event listeners

function createTodo() {
    todoList.innerText= "";
    tasks.forEach(function(item, index) {
        addTodo(item, index);
        // console.log(index);
            });
};
createTodo();
todoButton.addEventListener('click', pushItem);

//Functions
function pushItem(event) {
event.preventDefault();
if (todoInput.value) {
    tasks.push({text: todoInput.value, isCompleted: false}) ;
    createTodo();
    // addTodo(todoInput.value);
todoInput.value = "";
}};
// Set Local Storage

function addTodo(item, index) {

    //prevent form from submitting
    // event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');

    newTodo.innerText = item.text;
    newTodo.classList.add('todo-item')
    if(item.isCompleted) {
        newTodo.style.textDecoration = "line-through";
    }
    todoDiv.appendChild(newTodo);

    //Check check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
    completedButton.classList.add("complete-btn");
    completedButton.onclick = function() {
        if(item.isCompleted) {
            item.isCompleted = false;
        }
        else{
            item.isCompleted = true;
        }
        createTodo();
    }
    todoDiv.appendChild(completedButton);

    
    //Check edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    editButton.classList.add("edit-btn");
    // editButton.oneClick = function() {
    //     edit();
    // }
    todoDiv.appendChild(editButton);

    //Check delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-backspace"></i>';
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function() {
        tasks.splice(index, 1);
        createTodo();
    }
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.appendChild(todoDiv);
}

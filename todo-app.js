// Well refactored code to render

// Code from previous versions would be commented out.

// v1 : All data is stored in the JS file

// Declaring todo array data
const todos = [ 
    {
        todoText : 'Buy equipment',
        completed : false
    },
    {
        todoText : 'Eat some food',
        completed : false
    },
    {
        todoText : 'Code all day',
        completed : false
    },

    {
        todoText : 'Buy equipment',
        completed : true
    }
]


let isRendered = false //Used to avoid repeated rendering


const renderTodos = function(todos, renderAgain = false){

    if(!renderAgain && isRendered)
    {
        return;
    }
    todos.forEach(function(todo){
        todoEl = document.createElement('span') //CReating a span to include every todoText element with checkbox
        todoEl.classList.add("todoEl")
        
        

        todoDoneCheckbox = document.createElement('input')
        todoDoneCheckbox.type = 'checkbox'
        todoDoneCheckbox.checked = todo.completed; //Checkbox represents if the todo element is completed or not.

        todoTextEl = document.createElement('p')
        todoTextEl.textContent = todo.todoText


        
        
        todoEl.appendChild(todoDoneCheckbox);
        todoEl.appendChild(todoTextEl);
        
        //Appending the final todoEl to the todos div in the body.

        document.querySelector('div.todos').appendChild(todoEl);
        
        


       
    })

    isRendered = true;
}


// Add new todo when the button is clicked.
document.querySelector('#add-todo').addEventListener('click', function(){
    newTodoText = document.querySelector('#todo-input').value
    
    // Add todoText to the main todo Array.
    todos.push({
        todoText : newTodoText,
        completed: false
    })
    renderTodos(todos, true); // Calling renderTodos to print todos again for the updated list. 
    
})


renderTodos(todos);

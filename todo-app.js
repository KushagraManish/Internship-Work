// Well refactored code to render

// Code from previous versions would be commented out.

// v1 : All data is stored in the JS file

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


let isRendered = false


const renderTodos = function(todos, renderAgain = false){

    if(!renderAgain && isRendered)
    {
        return;
    }
    todos.forEach(function(todo){
        todoEl = document.createElement('span')
        todoEl.classList.add("todoEl")

        todoDoneCheckbox = document.createElement('input')
        todoDoneCheckbox.type = 'checkbox'
        todoDoneCheckbox.checked = todo.completed;

        todoTextEl = document.createElement('p')
        todoTextEl.textContent = todo.todoText


        
        
        todoEl.appendChild(todoDoneCheckbox);
        todoEl.appendChild(todoTextEl);

        document.querySelector('div.todos').appendChild(todoEl);
        
        


       
    })

    isRendered = true;
}


document.querySelector('#add-todo').addEventListener('click', function(){
    newTodoText = document.querySelector('#todo-input').value
    todos.push({
        todoText : newTodoText,
        completed: false
    })
    renderTodos(todos, true);
    
})


renderTodos(todos);
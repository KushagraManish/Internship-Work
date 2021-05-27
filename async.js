// Async JS

// One statement executed by other in Asynchronus JS.

// Asynchronus code helps to avoid blocking code.

// Helps to achieve paralell code processing.

console.log(1)
console.log(2)

setTimeout(() => {
    console.log('callback function fired')
}, 2000); // Does n't  block the before code. 


console.log(3)
console.log(4)

// HTTP Requests.

// Make requests to API Endpoints.

// ---> http request 
// <--- server response [JSON]


//Wrapping everything with an arrow function.
// const getTodos = (resource , callback) => { //so that we can use different json files.
     
    
//     const request = new XMLHttpRequest(); // request object

//     // request.addEventListener('readystatechange', () => {
//     //     console.log(request, request.readyState)/// Logs the readyState of the request.
//     // }) // Indicates whenever the request state changes.



//     // addEventListener to track the progress of the request.


//     // Open a new request.
//     // request.open('GET' , 'https://jsonplaceholder.typicode.com/todoss/') // Get request type , API Endpoint.request.send();
//     //404 status

//     // request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/1')


//     request.open('GET' , resource)
//     // 200 status --> Everything linked correctly.

//     request.send(); // send request
//     request.addEventListener('readystatechange', () =>  { // Listens for the even changes in request.
//         console.log(request, request.readyState)
//         if(request.readyState == 4 && request.status == 200) // If all operations have completed/
//         {   
//           //  console.log(request , request.responseText) // LOg the todo data.
//             callback(undefined, JSON.parse(request.responseText));
            
//         }else if(request.readyState == 4) { // All operations happened, but request status is improper. Indicates an
//             console.log("Some error occured : Could not fetch the data.")
//             callback('Could not fetch data' , undefined); // Passing errors.
//         }
//         /// Logs the readyState of the request.
//     })      // Indicates whenever the request state changes.

// //Should output 4 --> Request has been completed.



// // Normal status codes : 100 [information], 200 [all ok], 300 [redirection] , 400 [error], 500 [server error]





// }



// Demonstrating callback behaviour : Execute as data comes.


// console.log('a')
// console.log('b')
// getTodos('todo.json', (err, data) => {
//     console.log("Callback function fired from getTodos.")
    
//     if(data)
//     {
//         console.log(data)
            
//     }else{
//         console.log(err);
//     }
  
    


    

    
// });

// Nested Callbacks : to make one callback execute after the other.
// Also called Callback hell.

/*
getTodos('todo.json', (err, data) => {
    console.log("Callback function fired from getTodos.")
    
    if(data)
    {
        console.log(data)
            
    }else{
        console.log(err);
    }getTodos('todo1.json', (err, data) => {
        console.log("Callback function fired from getTodos.")
        
        if(data)
        {
            console.log(data)
                
        }else{
            console.log(err);
        }
    
        getTodos('todo2.json' , (err, data) => {
            console.log("Callback function fired from getTodos.")
            
            if(data)
            {
                console.log(data)
                    
            }else{
                console.log(err);
            }
        
            
        });        
    });



});

*/



console.log('c');

// Use promises to give sequence to Callbacks.

// Promise has two parameters : resolve and reject..

const getTodos = (resource) => { //so that we can use different json files.
     
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest(); // request object

        request.open('GET' , resource)
        

        request.send(); // send request
        request.addEventListener('readystatechange', () =>  { // Listens for the even changes in request.
            console.log(request, request.readyState)
            if(request.readyState == 4 && request.status == 200) // If all operations have completed/
            {   

                data = request.responseText
            
                resolve(data);
                
            }else if(request.readyState == 4) { // All operations happened, but request status is improper. Indicates an
                reject('error fetching resource : ' + resource);
            }
        
        })      
    })
    

}

// Using the declared promise
// Promise chaining : example.


getTodos('todo.json').then((data) => {
    console.log('Promise resolved   : ', data);
    return getTodos('todo1.json'); // Promise chaining : Next promise is returned to the parent
}).then((data)=>{
    console.log('Promise 2 resolved : ', data)
    return getTodos('todo2.json') // Promise chaining
}).then((data) => {
    console.log('Promise 3 resolved : ', data)
}).catch((err) => {
    console.log('Promise rejected' , err); // err = 'error fetching resource'
})

// Better method : Using fetch api

fetch('todo.json').then((response) =>{
    console.log('Fetch promise resolved.') // Executes and goes to next step.
    return response.json();
}).then((data) => {
    console.log(data)
    console.log('Resolved.')
}).catch((err) => {
    console.log('Promise rejected : '+ err)
})


// Async - Await methods. 

// Chain promises together and cleaner way.

const getTodos2 = async() => { // Always return promises
    const response = await fetch('todo0.json'); // Assigns a value only after promise has resolved.
    // Still gets resolved with status 404.
    // Error throwed at getTodos2()
    // Need to throw error
    if(response.status != 200)
    {
        throw new Error('Cannot fetch the data.'); // Promise rejected
    }

    const data = await response.json(); // Returns a json promise.
    
    return (data);
};




getTodos2()
    .then((data) => console.log('Resolved : ' + JSON.stringify(data))) // Use stringify to print the JSON Array.
    .catch((err) => console.log('Rejected : Error : ' + err.message))
// Non - blocking function.



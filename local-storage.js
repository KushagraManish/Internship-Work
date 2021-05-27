// Declaring a simple person object
const personObject = {
    'name' : 'Kushagra Manish',
    'id' : 38844,
    'work' : 'Intern'
}


// Adding item to localStorage with key person1
window.localStorage.setItem('person1', JSON.stringify(personObject))


// Retrieving the item
let personMem = window.localStorage.getItem('person1')
console.log(personMem)


// Retrieving the original json object
let objectRetrived = JSON.parse(personMem);
console.log(objectRetrived);

// Removing the item
window.localStorage.removeItem('person1')

// Clearing the memory
window.localStorage.clear();

// Making new person object.
const personObject2 = {
    'name' : 'Kushagra Manish',
    'id' : 38844,
    'work' : 'Intern'
}

// Storing the item.
window.localStorage.setItem('person2',JSON.stringify(personObject2));

// Retrieving it using key.
console.log(window.localStorage.key(0))
